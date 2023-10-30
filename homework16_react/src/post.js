
export default function Post(props) {
    return (
        <div className="container">
            <div className="head">
                <img className="head_img" src={props.author.photo} alt="autor" width="50px"></img>
                <p className="name_text">{props.author.name}</p>
                <p className="nickname_text">{props.author.nickname}</p>
                <p className="data_text">{props.date}</p>
            </div>
            <div className="post">
                <p className="content_text">{props.content}</p>
                <img className="post_img" src={props.image} alt="autor" width="700px"></img>
                <div className="social">
                    <div className="social_chat">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="15" height="15"><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12h12V12C24,5.38,18.62,0,12,0Zm9,21H12c-4.96,0-9-4.04-9-9S7.04,3,12,3s9,4.04,9,9v9Z" /></svg>
                        </span>
                        <span>482</span>
                    </div>
                    <div className="social_arrow">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="15" height="15"><path d="M24,12c0,4.411-3.589,8-8,8H3l2.293,2.293c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-3.293-3.293c-.78-.779-.78-2.049,0-2.828l3.293-3.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-2.293,2.293h13c3.309,0,6-2.691,6-6,0-.553,.448-1,1-1s1,.447,1,1ZM1,13c.552,0,1-.447,1-1,0-3.309,2.691-6,6-6h13l-2.293,2.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l3.293-3.293c.78-.779,.78-2.049,0-2.828L20.121,.293c-.391-.391-1.023-.391-1.414,0s-.391,1.023,0,1.414l2.293,2.293H8C3.589,4,0,7.589,0,12c0,.553,.448,1,1,1Z" /></svg>
                        </span>
                        <span>146</span>
                    </div>
                    <div className="social_heart">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" /></svg>
                        </span>
                        <span>887</span>
                    </div>
                    <div className="social_down">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="15" height="15"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z" /><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z" /></svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
