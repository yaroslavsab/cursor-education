import React from 'react';
import ReactDOM from 'react-dom/client';
import Post from './post';
import './index.css';



const ANAKIN_IMAGE = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f3f9bd9-0673-4276-bb34-71ece2a5820e/dfmgvw5-5ca3f7b0-0609-496b-acda-9d9654898413.png/v1/fill/w_1920,h_1920,q_80,strp/anakin_skywalker__ai_art__by_3d1viner_dfmgvw5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzlmM2Y5YmQ5LTA2NzMtNDI3Ni1iYjM0LTcxZWNlMmE1ODIwZVwvZGZtZ3Z3NS01Y2EzZjdiMC0wNjA5LTQ5NmItYWNkYS05ZDk2NTQ4OTg0MTMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DBMI1MjabrFhu1_Wh72RU-2mvNtBaOhKalaEUw5NvcA";
const RAY_IMAGE = "https://img.asmedia.epimg.net/resizer/wPaI49Rn3kXt8ZbrYfClBHozT9w=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/WAKCYCLVZZEVPOG6JLYMMKT454.png";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Post author={{
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader"
    }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 лют."}

    />

  </>
);


