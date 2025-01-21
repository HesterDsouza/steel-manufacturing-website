import { useState } from "react";
import "./adminPage.css"
import Dashboard from "./dashboard/Dashboard";
import UserQueries from "./userQueries/UserQueries";

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [renderTab, setRenderTab] = useState("dashboard");
    const [isFading, setIsFading] = useState(false);

    const handleTabChange = (tab) => {
      if(tab !== activeTab) {
        setIsFading(true);
        setTimeout(() => {
          setActiveTab(tab);
          setRenderTab(tab);
          setIsFading(false);
        }, 300)
      }
    }

  return (
    <div className="adminPage">
      <div className="tabs">
        <button 
          tabIndex={0} 
          onClick={() => handleTabChange("dashboard")}
          className={activeTab === "dashboard" ? "active" : ""}
        >
          Dashboard
        </button>
        <button 
          tabIndex={0} 
          onClick={() => handleTabChange("queries")}
          className={activeTab === "queries" ? "active" : ""}
        >
          User Queries
        </button>
      </div>
      <div className={`tab-content ${isFading ? "fade-out" : "fade-in"}`}>
        {renderTab === "dashboard" ? <Dashboard/> : <UserQueries />}
      </div>
    </div>
  )
}

export default AdminPage