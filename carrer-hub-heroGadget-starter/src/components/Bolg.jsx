import React from 'react';

const Bolg = () => {
    return (
        <>
        <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/unnamed.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">Why do we use context API?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">We use context API to avoid prop drilling through our components.</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/unnamed.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">What is custom hook?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">Custom hook is used to load and process data when we call the function it returns the estimated answer.</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/unnamed.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">What is UseRef?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">useRef is a built-in React hook that accepts one argument as the initial value and returns a reference</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/unnamed.png" />
          </div>
        </div>
        <div className="chat-header">
          Programming Hero
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">What is UseMemo?</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/antik.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Antik
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">useMemo() is a function that returns a memoized value of a passed in resource-intensive function.</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      </>
    );
};

export default Bolg;