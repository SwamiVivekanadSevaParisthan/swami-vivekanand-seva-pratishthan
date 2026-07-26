import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Dashboard() {
  const [mission, setMission] = useState("");
  const [about, setAbout] = useState("");
  const [donation, setDonation] = useState("");
  const [established, setEstablished] = useState("");
  const [boysCapacity, setBoysCapacity] = useState("");
  const [girlsCapacity, setGirlsCapacity] = useState("");
  const [childrenCount, setChildrenCount] = useState("");

  const [events, setEvents] = useState("");
  const [news, setNews] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const siteDoc = await getDoc(doc(db, "siteContent", "main"));
    const newsDoc = await getDoc(doc(db, "news", "main"));
    const eventsDoc = await getDoc(doc(db, "events", "main"));
    const contactDoc = await getDoc(doc(db, "Contact", "main"));
    const missionDoc = await getDoc(doc(db, "siteContent", "mission"));

    if (siteDoc.exists()) {
      if (missionDoc.exists()) {
      setEstablished(missionDoc.data().established || "");
      setBoysCapacity(missionDoc.data().boysCapacity || "");
      setGirlsCapacity(missionDoc.data().girlsCapacity || "");
      setChildrenCount(missionDoc.data().childrenCount || "");
}
      setMission(siteDoc.data().mission || "");
      setAbout(siteDoc.data().about || "");
      setDonation(siteDoc.data().donation || "");
    }

    if (newsDoc.exists()) {
      setNews(newsDoc.data().content || "");
    }

    if (eventsDoc.exists()) {
      setEvents(eventsDoc.data().content || "");
    }

    if (contactDoc.exists()) {
      setPhone(contactDoc.data().phone || "");
      setEmail(contactDoc.data().email || "");
      setAddress(contactDoc.data().address || "");
    }
  };

  const saveChanges = async () => {
    await updateDoc(doc(db, "siteContent", "main"), {
      mission,
      about,
      donation,
    });

    await updateDoc(doc(db, "news", "main"), {
      content: news,
    });

    await updateDoc(doc(db, "events", "main"), {
      content: events,
    });

    await updateDoc(doc(db, "Contact", "main"), {
      phone,
      email,
      address,
    });

    alert("Changes Saved Successfully!");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>SVSP Admin Dashboard</h1>

      <h2>Mission</h2>
      <textarea value={mission} onChange={(e) => setMission(e.target.value)} rows={4} cols={80} />

      <h2>About Us</h2>
      <textarea value={about} onChange={(e) => setAbout(e.target.value)} rows={4} cols={80} />

      <h2>Donation Details</h2>
      <textarea value={donation} onChange={(e) => setDonation(e.target.value)} rows={4} cols={80} />

      <h2>Events</h2>
      <textarea value={events} onChange={(e) => setEvents(e.target.value)} rows={4} cols={80} />

      <h2>News</h2>
      <textarea value={news} onChange={(e) => setNews(e.target.value)} rows={4} cols={80} />

      <h2>Phone</h2>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} />

      <h2>Email</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <h2>Address</h2>
      <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={4} cols={80} />

      <br />
      <br />

      <button onClick={saveChanges}>
        Save Changes
      </button>
    </div>
  );
}