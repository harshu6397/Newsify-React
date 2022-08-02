import React from 'react'

export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className=' my-3 mx-3'>
            <div className="card" >
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className="badge rounded-pill text-light bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" : imageUrl} style={{ height: "250px" }} className="card-img-top" alt="news" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
