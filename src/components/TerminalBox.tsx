import React, { useEffect, useState, useRef } from "react";
import renderCmd from "../utils/renderCmd";
import CmdUserInput from "./CmdUserInput";
import EnteredCmd from "./EnteredCmd";
import TodayDate from "./TodayDate";
import Help from "./commands/Help";
import Navbar from "./Navbar";
import Welcome from "./commands/Welcome";

//function component
export default function TerminalBox() {
	//state variables
	const [enteredCmd, setEnteredCmd] = useState([
		{
			cmd: "",
			Component: Welcome,
			time: new Date().toLocaleTimeString(),
		},
		{
			cmd: "help",
			Component: Help,
			time: new Date().toLocaleTimeString(),
		},
	]);

	//
	const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	useEffect(() => {
		dummyRef.current.scrollIntoView({ behavior: "auto" });
	}, [enteredCmd]);//later use to scroll to the bottom of the terminal box.
	useEffect(() => {
		document.body.addEventListener("keydown", handleKeyEvent);
	}, []);//run once the componenets mounts, add event listener to keydown event on document.body and calls
	const handleSubmit = (cmd: string) => {
		if (cmd.toLowerCase() === "clear") {
			setEnteredCmd([]);
			
		} else if (cmd.toLowerCase() === "help") {
			setEnteredCmd((currentCmd) => [
				...currentCmd,
				{ ...renderCmd(cmd), time: new Date().toLocaleTimeString(), Component: Help },
			]);
		} 
		else if (cmd.toLowerCase() === "email") {
			setEnteredCmd((currentCmd) => [
			  ...currentCmd,
			  {
				...renderCmd(cmd),
				time: new Date().toLocaleTimeString(),
				Component: () => {
				  useEffect(() => {
					window.location.href = "mailto:fadzwanashriq.m@gmail.com";
				  }, []);
		  
				  return (
					<div>
					  <p>Opening email client...</p>
					</div>
				  );
				},
				color: 'White',
				backgroundColor: 'red'
			  },
			]);
		  
			// Simulate email functionality
			console.log("Opening email client...");
		  }

		  else if (cmd.toLowerCase() === "github") {
			setEnteredCmd((currentCmd) => [
			  ...currentCmd,
			  {
				...renderCmd(cmd),
				time: new Date().toLocaleTimeString(),
				Component: () => {
				  useEffect(() => {
					window.open("https://github.com/fadzwanashriq","_blank")
				  }, []);
		  
				  return (
					<div>
					  <p>Opening github pages</p>
					</div>
				  );
				},
				color: 'White',
				backgroundColor: 'red'
			  },
			]);
		  
		  }

		  else if (cmd.toLowerCase() === "twitter") {
			setEnteredCmd((currentCmd) => [
			  ...currentCmd,
			  {
				...renderCmd(cmd),
				time: new Date().toLocaleTimeString(),
				Component: () => {
				  useEffect(() => {
					window.open("https://x.com/IDEEIwXJ56jSQ66","_blank")
				  }, []);
		  
				  return (
					<div>
					  <p>Opening twitter pages</p>
					</div>
				  );
				},
				color: 'White',
				backgroundColor: 'red'
			  },
			]);
		  
		  }

		  else if (cmd.toLowerCase() === "harraz") {
			setEnteredCmd((currentCmd) => [
			  ...currentCmd,
			  {
				...renderCmd(cmd),
				time: new Date().toLocaleTimeString(),
				Component: () => {
				  useEffect(() => {
					window.open("https://x.com/harraznsrllh","_blank")
				  }, []);
		  
				  return (
					<div>
					  <p>Opening twitter pages</p>
					</div>
				  );
				},
				color: 'White',
				backgroundColor: 'red'
			  },
			]);
		  
		  }

		// else if (cmd.toLowerCase() === "email") {
		// 	setEnteredCmd((currentCmd) => [
		// 	  ...currentCmd,
		// 	  {
		// 		...renderCmd(cmd),
		// 		time: new Date().toLocaleTimeString(),
		// 		Component: () => {
		// 		  const handleEmailClick = () => {
		// 			window.location.href = "mailto:fadzwanashriq.m@gmail.com";
		// 		  };
		  
		// 		  return (
		// 			<div>
		// 			  <button onClick={handleEmailClick}>Send Email</button>
		// 			</div>
		// 		  );
		// 		},
		// 		color: 'White',
		// 		backgroundColor: 'red'
		// 	  },
		// 	]);
		  
		// 	// Simulate email functionality
		// 	console.log("Opening email client...");
		//   }
		else {
			setEnteredCmd((currentCmd) => [
				...currentCmd,
				{ ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
			]);
		}
	}; //takes cmd as input, create new command object , adds current time and ..
	//update enteredCmd by appending the command with the exisiting command

	const handleKeyEvent = (e: KeyboardEvent) => {
		if (e.ctrlKey && e.key.toLocaleLowerCase() ==="l") {
			setEnteredCmd([]);
		}
	};//here it checks if both ctrl and lowercase l was pressed , them it will clear the enteredCmd 
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
				<TodayDate />
				<EnteredCmd enteredCmd={enteredCmd}/>
				<CmdUserInput onSubmit={handleSubmit} />
				<div ref={dummyRef}></div>
			</div>
		</div>
	);
}
