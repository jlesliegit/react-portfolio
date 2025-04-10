import TechnologySection from "./TechnologySection";
import {useState} from "react";
import CategorySelector from "./CategorySelector.jsx";

export default function TechnologyGrid() {
    const [activeTab, setActiveTab] = useState(null);

    return(
        <div>
            <CategorySelector activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "languages" && <TechnologySection category="languages" />}
            {activeTab === "frameworks" && <TechnologySection category="frameworks" />}
            {activeTab === "tools" && <TechnologySection category="tools" />}
        </div>
    )
}