import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import YesNo from "./components/YesNo";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Form from "./components/Form";
import LifecyleA from "./components/LifecyleA";

function App() {
	return (
		<div className="App">
            <LifecyleA/>
            {/* <Form/> */}
            {/* <Stylesheets/> */}
            {/* <NameList /> */}
			{/* <YesNo name="Byron" /> */}
            {/* <EventBind /> */}
            {/* <ParentComponent/> */}
            {/* <UserGreeting/> */}
			{/*<ClassClick />*/}
			{/* <FunctionClick /> */}
			{/* <Counter /> */}
			{/* <Message /> */}
			{/* <Greet name="Bruce" heroName="Batman">
				<p>This is children props</p>
			</Greet>
			<Greet name="Anna" heroName="Wonder Woman">
				<button>Action</button>
			</Greet>
			<Greet name="Clark" heroName="Superman" /> */}
			{/* <Welcome name="Bruce" heroName="Batman" />
			<Welcome name="Anna" heroName="Wonder Woman" />
			<Welcome name="Clark" heroName="Superman" /> */}
			{/* <Hello /> */}
		</div>
	);
}

export default App;
