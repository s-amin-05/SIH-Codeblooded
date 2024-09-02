import React from 'react'
import './Browse.css'

function Browse() {
    return (
        <>
            <header className="header">
        <h1>Browse</h1>
        <div className="search-container">
            <input type="text" placeholder="Search for projects" className="search-bar" />
            <button className="save-btn" >Save</button>
        </div>
        
    </header>
    <div className="main-content">
        <aside className="filters">
            <h2>Filters</h2>
            <div className="filter-section">
                <h3>Project type</h3>
                <label><input type="checkbox"/> Hourly Rate</label><br />
                <label><input type="checkbox"/> Fixed Price</label>
            </div>
            <div className="filter-section">
                <h3>Fixed price</h3>
                <label>min <br/> <input type="number" value="7" className="box"/> INR</label><br/>
                <label>max <br/><input type="number" value="1500" className="box"/> INR</label>
            </div>
            <div className="filter-section">
                <h3>Hourly rate</h3>
                <label>min <br/><input type="number" value="0" className="box"/> INR</label><br/>
                <label>max <br/><input type="number" value="80" className="box"/> INR</label>
            </div>
        </aside>
        
        <section className="project-list">
            <div className="top-results">
                <h2>Top results 1-20 of 1K results</h2>
                <div className="alerts-sort">
                    <label className="alerts"><input type="checkbox"/>Receive alerts for this search</label>
                    <select>
                        <option>Sort by</option>
                        <option>Latest</option>
                        <option>Oldest</option>
                    </select>
                </div>
            </div>
            {ProjectList.map(project => (
                <ProjectItem project={project} />
            ))}
            
        </section>
    </div>
    </>
    )
}

export default Browse

const ProjectList = [
    {
        heading: "Video Editing Expert Needed",
        budget: {
            min: 400,
            max: 750,
            currency: "INR",
            type: "per hour"
        },
        description: {
            short: "I'm looking for a skilled video editor to enhance my videos.",
            full: "Description"
        
        },
        skills: ["Video Services", "After Effects", "Videography", "Video Production", "Video Editing"],
        bids: {
            count: 5,
            average: 4050,
            time: "24 minutes ago"
        }
    } ,
    
    {
        heading: "Web-Based Product Description Data Entry",
        budget: {
            min: 1500,
            max: 12500,
            currency: "INR",
            type: "fixed"
        },
        description: {
            short: "I'm seeking a meticulous individual for a data entry project. The task involves gathering and entering text data, specifically product descriptions, from various web sources. Ideal Skills and Experience: - Prior experience in data entry - Strong attention to detail - Proficient in handling web content - Text data entry expertise - Experience with product descriptions.",
            full: "Description"
        
        },
        skills: ["Data Entry", "Excel", "Web Scraping", "Web Search", "Product Descriptions"],
        bids: {
            count: 5,
            average: 4050,
            time: "24 minutes ago"
        }
    },
    {
        heading: "Web-Based Product Description Data Entry",
        budget: {
            min: 1500,
            max: 12500,
            currency: "INR",
            type: "fixed"
        },
        description: {
            short: "I'm seeking a meticulous individual for a data entry project. The task involves gathering and entering text data, specifically product descriptions, from various web sources. Ideal Skills and Experience: - Prior experience in data entry - Strong attention to detail - Proficient in handling web content - Text data entry expertise - Experience with product descriptions.",
            full: "Description"
        
        },
        skills: ["Data Entry", "Excel", "Web Scraping", "Web Search", "Product Descriptions"],
        bids: {
            count: 5,
            average: 4050,
            time: "24 minutes ago"
        }
    }
]

function ProjectItem({project}) {
    return (
        <div className="project-item">
            <h2>{project.heading}</h2>
            <h4>Budget {project.budget.min} - {project.budget.max} {project.budget.currency} {project.budget.type}</h4>
            <p>{project.description.short}</p>
            <div className="tags">
                {project.skills.map(skill => (
                    <span>{skill}</span>
                ))}
            </div>
            <div className="bids">
                <span>{project.bids.count} bids</span>
                <span>{project.bids.average} {project.budget.currency}</span>
                <span>{project.bids.time}</span>
            </div>
        </div>
    )
}
