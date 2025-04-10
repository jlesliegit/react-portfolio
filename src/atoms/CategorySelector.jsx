export default function CategorySelector({ activeTab, setActiveTab }) {
    function handleTabChange(tab) {
        setActiveTab(activeTab === tab ? null : tab);
    }

    return (
        <div className="grid grid-cols-3 max-md:flex max-md:flex-col mb-4 border-1 border-gray-200 rounded-lg">
            <div
                className={`flex justify-center py-2 rounded-lg ${
                    activeTab === "languages" ? "bg-[#3780E9] text-white max-sm:drop-shadow-lg" : "bg-white"
                }`}
                onClick={() => handleTabChange("languages")}
            >
                <h3>Languages</h3>
            </div>

            <div
                className={`flex justify-center py-2 rounded-lg ${
                    activeTab === "frameworks" ? "bg-[#3780E9] text-white max-sm:drop-shadow-lg" : "bg-white"
                }`}
                onClick={() => handleTabChange("frameworks")}
            >
                <h3>Frameworks</h3>
            </div>

            <div
                className={`flex justify-center py-2 rounded-lg ${
                    activeTab === "tools" ? "bg-[#3780E9] text-white max-sm:drop-shadow-lg" : "bg-white"
                }`}
                onClick={() => handleTabChange("tools")}
            >
                <h3>Tools</h3>
            </div>
        </div>
    );
}