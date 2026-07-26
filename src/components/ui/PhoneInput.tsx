import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { COUNTRIES, Country } from "../../data/countries";

export function validatePhoneNumber(countryCode: string, number: string): { isValid: boolean; errorMsg: string } {
  const selectedCountry = COUNTRIES.find((c) => c.code === countryCode);
  if (!selectedCountry) {
    return { isValid: false, errorMsg: "Invalid country selected" };
  }

  const dialCode = selectedCountry.dialCode;
  let clean = number.trim();

  // Strip dial code if present
  if (clean.startsWith(dialCode)) {
    clean = clean.substring(dialCode.length).trim();
  }

  if (!clean) {
    return { isValid: false, errorMsg: "Phone number is required" };
  }

  // Reject numbers containing letters, spaces, or special characters (after the country code, which we stripped)
  if (/[^\d]/.test(clean)) {
    return { isValid: false, errorMsg: "Only digits (0-9) are allowed after the country code" };
  }

  const digits = clean;

  // Reject obviously fake numbers: repeated digits (e.g. 0000000000, 1111111111)
  if (/^(\d)\1+$/.test(digits)) {
    return { isValid: false, errorMsg: "Please enter a valid, non-repetitive phone number" };
  }

  // Reject common sequential numbers
  const sequentialUp = "0123456789";
  const sequentialDown = "9876543210";
  if (digits.length >= 6) {
    if (sequentialUp.includes(digits) || sequentialDown.includes(digits)) {
      return { isValid: false, errorMsg: "Sequential phone numbers are not allowed" };
    }
  }

  // Validate according to selected country's official numbering format and required length
  if (countryCode === "IN") {
    if (digits.length < 10 || digits.length > 12) {
      return { isValid: false, errorMsg: "Must be between 10 and 12 digits for India (+91)" };
    }
    if (!/^[0-9]\d{9,11}$/.test(digits)) {
      return { isValid: false, errorMsg: "Indian phone number must contain only digits" };
    }
  } else if (countryCode === "US" || countryCode === "CA") {
    if (digits.length !== 10) {
      return { isValid: false, errorMsg: "Must be exactly 10 digits for US/Canada" };
    }
    if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) {
      return { isValid: false, errorMsg: "Please enter a valid 10-digit North American phone number" };
    }
  } else if (countryCode === "GB") {
    if (digits.length < 9 || digits.length > 11) {
      return { isValid: false, errorMsg: "UK phone numbers must be between 9 and 11 digits" };
    }
  } else if (countryCode === "AU") {
    if (digits.length !== 9 && digits.length !== 10) {
      return { isValid: false, errorMsg: "Australian numbers must be 9 or 10 digits" };
    }
  } else if (countryCode === "SG") {
    if (digits.length !== 8) {
      return { isValid: false, errorMsg: "Singapore numbers must be exactly 8 digits" };
    }
  } else if (countryCode === "AE") {
    if (digits.length !== 9 && digits.length !== 7) {
      return { isValid: false, errorMsg: "UAE numbers must be 7 or 9 digits" };
    }
  } else {
    if (digits.length < 7 || digits.length > 15) {
      return { isValid: false, errorMsg: "International numbers must be between 7 and 15 digits" };
    }
  }

  return { isValid: true, errorMsg: "" };
}

export function getMaxDigitsForCountry(code: string): number {
  switch (code) {
    case "IN": return 12;
    case "US":
    case "CA": return 10;
    case "GB": return 11;
    case "AU": return 10;
    case "SG": return 8;
    case "AE": return 9;
    default: return 15;
  }
}

interface PhoneInputProps {
  countryCode: string; // e.g., "IN"
  phone: string; // national number
  onChange: (countryCode: string, phone: string, isValid: boolean) => void;
  required?: boolean;
  label?: string;
  idPrefix?: string;
}

const getRelevance = (c: Country, q: string): number => {
  const query = q.trim().toLowerCase();
  if (!query) return 0;

  const code = c.code.toLowerCase();
  const name = c.name.toLowerCase();
  const dial = c.dialCode.toLowerCase();
  const dialNoPlus = dial.replace('+', '');
  const aliases = c.aliases || [];

  // Exact matches (Highest priority)
  if (code === query) return 100;
  if (name === query) return 90;
  if (dial === query || dialNoPlus === query) return 80;
  if (aliases.some(alias => alias.toLowerCase() === query)) return 85;

  // Starts-with matches
  if (name.startsWith(query)) return 70;
  if (dial.startsWith(query) || dialNoPlus.startsWith(query)) return 60;
  if (aliases.some(alias => alias.toLowerCase().startsWith(query))) return 65;

  // Contains matches
  if (name.includes(query)) return 50;
  if (code.includes(query)) return 40;
  if (dial.includes(query) || dialNoPlus.includes(query)) return 30;
  if (aliases.some(alias => alias.toLowerCase().includes(query))) return 35;

  return -1; // No match
};

export function PhoneInput({
  countryCode,
  phone,
  onChange,
  required = false,
  label,
  idPrefix = "phone",
}: PhoneInputProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedCountry = COUNTRIES.find((c) => c.code === countryCode) || COUNTRIES[0];

  const getNationalDigits = (phoneStr: string, currentDial: string): string => {
    const match = phoneStr.match(/^\+(\d+)\s*(.*)$/);
    if (match) {
      return match[2].replace(/\D/g, "");
    }
    const digits = phoneStr.replace(/\D/g, "");
    const dialDigits = currentDial.replace(/\D/g, "");
    if (digits.startsWith(dialDigits)) {
      return digits.substring(dialDigits.length);
    }
    return digits;
  };

  // Sync / Auto-prepend dial code on mount and on country code change
  useEffect(() => {
    const prefix = selectedCountry.dialCode + " ";
    if (!phone || !phone.startsWith(prefix)) {
      const nationalDigits = getNationalDigits(phone, selectedCountry.dialCode);
      const maxLen = getMaxDigitsForCountry(countryCode);
      const truncatedDigits = nationalDigits.substring(0, maxLen);
      const formatted = `${selectedCountry.dialCode} ${truncatedDigits}`;
      const validation = validatePhoneNumber(countryCode, formatted);
      onChange(countryCode, formatted, validation.isValid);
    }
  }, [countryCode]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (dropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [dropdownOpen]);

  // Filter and sort countries based on search relevance and exact-match sorting
  const filteredCountries = COUNTRIES.map((c) => ({
    country: c,
    relevance: getRelevance(c, searchQuery),
  }))
    .filter((item) => searchQuery.trim() === "" || item.relevance > 0)
    .sort((a, b) => {
      if (searchQuery.trim() === "") {
        return 0; // Maintain default order when query is empty
      }
      if (b.relevance !== a.relevance) {
        return b.relevance - a.relevance; // Highest relevance first
      }
      return a.country.name.localeCompare(b.country.name); // Alphabetical tie-breaker
    })
    .map((item) => item.country);

  // Auto-focus the top match when search query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [searchQuery]);

  const handleCountrySelect = (country: Country) => {
    setDropdownOpen(false);
    setSearchQuery("");

    const nationalDigits = getNationalDigits(phone, selectedCountry.dialCode);
    const maxLen = getMaxDigitsForCountry(country.code);
    const truncatedDigits = nationalDigits.substring(0, maxLen);
    const newPhoneValue = `${country.dialCode} ${truncatedDigits}`;
    const validation = validatePhoneNumber(country.code, newPhoneValue);
    onChange(country.code, newPhoneValue, validation.isValid);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const prefix = selectedCountry.dialCode + " ";
    let inputDigits = "";

    if (rawValue.startsWith(prefix)) {
      inputDigits = rawValue.substring(prefix.length).replace(/\D/g, "");
    } else {
      const justDigits = rawValue.replace(/\D/g, "");
      const dialDigits = selectedCountry.dialCode.replace(/\D/g, "");
      if (justDigits.startsWith(dialDigits)) {
        inputDigits = justDigits.substring(dialDigits.length);
      } else {
        inputDigits = justDigits;
      }
    }

    const maxLen = getMaxDigitsForCountry(countryCode);
    const truncatedDigits = inputDigits.substring(0, maxLen);

    const newValue = `${selectedCountry.dialCode} ${truncatedDigits}`;
    const validation = validatePhoneNumber(countryCode, newValue);
    onChange(countryCode, newValue, validation.isValid);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCountries.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCountries.length) % filteredCountries.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCountries.length > 0 && activeIndex >= 0 && activeIndex < filteredCountries.length) {
        handleCountrySelect(filteredCountries[activeIndex]);
      }
    }
  };

  const validation = validatePhoneNumber(countryCode, phone);
  const digitsOnly = getNationalDigits(phone, selectedCountry.dialCode);
  const showError = digitsOnly.length > 0 && !validation.isValid;

  return (
    <div className="space-y-1 w-full" ref={containerRef}>
      {label && (
        <label htmlFor={`${idPrefix}-national`} className="block text-xs font-semibold text-text-secondary mb-1">
          {label} {required && <span className="text-amber-500">*</span>}
        </label>
      )}

      <div className="flex gap-2 relative">
        {/* Country Selector Trigger Button */}
        <button
          type="button"
          id={`${idPrefix}-selector-trigger`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1.5 bg-bg-card hover:bg-slate-800/50 border border-border-primary rounded-xl px-3 py-3 text-xs font-semibold text-text-primary focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer h-[46px] select-none"
        >
          <span className="text-base leading-none" role="img" aria-label={selectedCountry.name}>
            {selectedCountry.flag}
          </span>
          <span className="font-mono text-text-secondary">{selectedCountry.dialCode}</span>
          <ChevronDown size={14} className="text-text-tertiary" />
        </button>

        {/* National Number Input Field */}
        <input
          type="tel"
          id={`${idPrefix}-national`}
          required={required}
          value={phone}
          onChange={handlePhoneChange}
          maxLength={selectedCountry.dialCode.length + 1 + getMaxDigitsForCountry(countryCode)}
          placeholder="Enter mobile number"
          className="flex-1 bg-bg-card border border-border-primary rounded-xl py-3 px-4 text-xs font-semibold text-text-primary focus:outline-none focus:ring-1 focus:ring-amber-500 h-[46px]"
        />

        {/* Country Code Selection Dropdown Overlay */}
        {dropdownOpen && (
          <div className="absolute top-[50px] left-0 mt-1 w-72 bg-bg-card border border-border-primary rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
            {/* Search Country bar */}
            <div className="p-2 border-b border-border-primary flex items-center gap-2 bg-bg-secondary/50">
              <Search size={14} className="text-text-tertiary shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search country / code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none text-xs font-semibold text-text-primary focus:outline-none placeholder:text-text-tertiary"
              />
            </div>

            {/* List of countries */}
            <div className="max-h-56 overflow-y-auto scrollbar-none py-1">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c, idx) => (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleCountrySelect(c)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`w-full text-left px-3 py-2 text-xs font-bold transition-all duration-150 flex items-center justify-between ${
                      idx === activeIndex
                        ? "bg-amber-500/10 text-amber-500 border-l-2 border-amber-500"
                        : countryCode === c.code
                        ? "bg-amber-500/5 text-amber-500"
                        : "text-text-secondary hover:bg-bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg leading-none" role="img" aria-label={c.name}>
                        {c.flag}
                      </span>
                      <span className="truncate max-w-[130px] font-sans">{c.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-text-tertiary font-bold">{c.dialCode}</span>
                  </button>
                ))
              ) : (
                <div className="text-center py-4 text-xs text-text-tertiary font-semibold font-mono">
                  No countries found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {showError && (
        <span className="block text-[10px] font-bold text-red-500 font-mono pl-1">
          {validation.errorMsg}
        </span>
      )}
    </div>
  );
}
