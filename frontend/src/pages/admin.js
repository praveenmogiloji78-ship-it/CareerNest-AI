function Admin() {

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <div className="bg-black text-white p-5 shadow-md">

                <h1 className="text-3xl font-bold">
                    Admin Dashboard
                </h1>

            </div>

            {/* Main Content */}
            <div className="p-10">

                {/* Cards */}
                <div className="grid md:grid-cols-4 gap-6">

                    {/* Users */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-3xl font-bold text-blue-600">
                            120
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Total Users
                        </p>

                    </div>

                    {/* Recruiters */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-3xl font-bold text-green-600">
                            40
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Recruiters
                        </p>

                    </div>

                    {/* Jobs */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-3xl font-bold text-yellow-600">
                            85
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Jobs Posted
                        </p>

                    </div>

                    {/* Applications */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">

                        <h2 className="text-3xl font-bold text-red-600">
                            230
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Applications
                        </p>

                    </div>

                </div>

                {/* Manage Users Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg mt-10">

                    <h2 className="text-3xl font-bold text-blue-600 mb-6">
                        Manage Users
                    </h2>

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-200">

                                <th className="p-3 text-left">
                                    Name
                                </th>

                                <th className="p-3 text-left">
                                    Email
                                </th>

                                <th className="p-3 text-left">
                                    Role
                                </th>

                                <th className="p-3 text-left">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="border-b">

                                <td className="p-3">
                                    Praveen
                                </td>

                                <td className="p-3">
                                    praveen@gmail.com
                                </td>

                                <td className="p-3">
                                    Candidate
                                </td>

                                <td className="p-3">

                                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default Admin;