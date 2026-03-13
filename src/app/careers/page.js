'use client';

import PageLayout from '../components/PageLayout';

export default function CareersPage() {
  const openings = [
    {
      title: "Sales Manager",
      location: "Nairobi",
      type: "Full-time",
      description: "Lead our sales team and drive business growth across Kenya."
    },
    {
      title: "Warehouse Supervisor",
      location: "Mombasa",
      type: "Full-time",
      description: "Manage warehouse operations and ensure efficient inventory management."
    },
    {
      title: "Customer Service Representative",
      location: "Nairobi",
      type: "Full-time",
      description: "Provide excellent customer support and handle inquiries."
    },
    {
      title: "Delivery Driver",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Deliver construction materials to customers across the region."
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary mb-6">Join Our Team</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Why Work at BuildMart?</h2>
          <p className="text-gray-700 mb-6">
            At BuildMart, we believe our employees are our greatest asset. We offer competitive salaries, 
            comprehensive benefits, and opportunities for career growth in a dynamic and supportive environment.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <i className="fas fa-users text-4xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">Great Team</h3>
              <p className="text-gray-600 text-sm">Work with talented professionals</p>
            </div>
            <div className="text-center">
              <i className="fas fa-chart-line text-4xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">Opportunities for advancement</p>
            </div>
            <div className="text-center">
              <i className="fas fa-gift text-4xl text-primary mb-3"></i>
              <h3 className="font-semibold mb-2">Great Benefits</h3>
              <p className="text-gray-600 text-sm">Competitive compensation package</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-secondary mb-6">Current Openings</h2>
        <div className="space-y-4">
          {openings.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-1">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span><i className="fas fa-map-marker-alt mr-1"></i>{job.location}</span>
                    <span><i className="fas fa-clock mr-1"></i>{job.type}</span>
                  </div>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
