import React from 'react';
import './UserProfile.css';

function UserProfile() {
  const user = {
    name: 'Aayush Sharma',
    title: 'Full Stack Developer',
    location: 'Mumbai, India',
    profilePicture: './profile.png',
    bio: 'Experienced Full Stack Developer with expertise in React, Node.js, and Python. Passionate about building scalable web applications.',
    skills: ['React', 'Node.js', 'Python', 'Django', 'MongoDB', 'GraphQL'],
    portfolio: [
      {
        title: 'E-commerce Platform',
        description: 'Developed a full-featured e-commerce platform with payment integration.',
        link: '#',
      },
      {
        title: 'Social Media App',
        description: 'Created a social media application with real-time chat and notification features.',
        link: '#',
      },
    ],
    reviews: [
      {
        client: 'JP Morgan ',
        review: 'Great work on our project. Delivered on time and exceeded expectations!',
        rating: 5,
      },
      {
        client: 'Tech Innovations',
        review: 'John is a reliable developer who always meets deadlines.',
        rating: 4,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <img src={user.profilePicture}  className="w-32 h-32 rounded-full mr-6 bg-[#747264]" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <h2 className="text-xl text-gray-600">{user.title}</h2>
          <h3 className='text-lg '>{user.reviews[1].rating}⭐</h3>
          <p className="text-gray-500">{user.location}</p>
        </div>
      </div>

      <div className="mb-6 bg-[#eeedeb] border-none  p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">About Me</h3>
        <p className="text-gray-700">{user.bio}</p>
      </div>

      <div className="mb-6 bg-[#eeedeb] border-none p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <ul className="flex flex-wrap">
          {user.skills.map((skill, index) => (
            <li key={index} className="bg-[#747264] text-white rounded-full px-4 py-2 mr-2 mb-2">
              {skill}
            </li>
          ))}
        </ul>
      </div> 
     

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
        <ul>
          {user.portfolio.map((project, index) => (
            <li key={index} className="mb-4 bg-[#eeedeb] border-none p-6 rounded-lg shadow-md ">
              <h4 className="text-md font-medium">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#3c3633] hover:underline">
                View Project
              </a>
            </li>
          ))}
        </ul>
        

      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Reviews</h3>
        <ul>
          {user.reviews.map((review, index) => (
            <li key={index} className="mb-4 bg-[#eeedeb] border-none p-6 rounded-lg shadow-md ">
              <h4 className="text-md font-medium">{review.client}</h4>
              <p className="text-gray-600">{review.review}</p>
              <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
            </li>
            
          ))}
        </ul>
      </div>
    </div>

  );
}

export default UserProfile;
