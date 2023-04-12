import React from 'react';

const Blog = () => {
    return (
       <div className='mb-20'>
        <h1 className="text-4xl text-center font-bold mt-52 md:mt-20 ">Blog</h1>
         <div className=''>
            <h1 className='text-center text-4xl text-blue-600 font-bold mt-6'>Question And Answer</h1>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: When should you use context API? </h3>
                <p><span className='font-bold'>A</span>: Context API is useful when you have data or state that needs to be accessed by multiple components in your React application. It allows you to avoid "prop drilling," or passing data down through multiple levels of components.needed to pass data between components.</p>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: What is Custom Hook In React Js? </h3>
                <p><span className='font-bold'>A</span>: A custom hook is a function that you write which allows you to reuse stateful logic between different components. Custom hooks start with the word "use" and can be called in any functional component, allowing you to extract and share common logic across your application. </p>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: What is useRef and why should we use useRef in react js? </h3>
                <p><span className='font-bold'>A</span>: useRef is a hook that provides a way to create a mutable reference to a DOM element or a value that persists across re-renders. useRef is useful when you need to access a DOM element imperatively </p>
            </div>
            <div className='mt-6'>
                <h3 className='text-2xl'><span className='font-bold'>Q</span>: What is useMemo in react js and why should we use useMemo ? </h3>
                <p><span className='font-bold'>A</span>:useMemo is a hook that allows you to memoize the result of a function call and avoid unnecessary re-computations. useMemo is useful when you have a function that takes a long time to compute or is called frequently  </p>
            </div>
        </div>
       </div>
    );
};

export default Blog;