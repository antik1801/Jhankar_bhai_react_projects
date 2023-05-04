import React, { useRef } from "react";
import Pdf from 'react-to-pdf';


const Blog = () => {
    const ref = useRef()
  return (
    <div className="w-[80vw] mx-auto my-10">
    <Pdf targetRef={ref} filename="document.pdf" className="text-center">
        {
            ({toPdf}) =>(<button onClick={toPdf} className="btn btn-primary ">
            Generate PDF
        </button>)
        }
    </Pdf>
    <div ref={ref}>
    <div >
        <div className="grid grid-cols-3">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="ph.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">Tell us difference between uncontrolled and controlled components?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div></div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="ph.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">How to validate props react props using proptypes?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">In React, we can use proptypes to chech whether a prop is a string value or number. Example:
        <br />
        component-name.propTypes = "{
            "element : PropTypes.string"
        }"
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
        <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="ph.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">Tell us the difference between nodejs and expressjs</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={"ph.png"} />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">What is custoom hook and why we use custom hook ?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={"antik.jpg"} />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Blog;
