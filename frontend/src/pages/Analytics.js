import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function Analytics() {

    const data = [

        {
            name: "Jobs",
            value: 25,
        },

        {
            name: "Applications",
            value: 40,
        },

        {
            name: "Recruiters",
            value: 15,
        },

        {
            name: "Users",
            value: 60,
        },

    ];

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            {/* Heading */}
            <h1 className="text-4xl font-bold text-blue-600 mb-10">
                Analytics Dashboard
            </h1>

            {/* Chart Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold mb-6">
                    Platform Statistics
                </h2>

                <ResponsiveContainer width="100%" height={400}>

                    <BarChart data={data}>

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar dataKey="value" fill="#3B82F6" />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );
}

export default Analytics;