import React from "react";

export default function Main(props){
    return(
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main-title">Fun facts about React</h1>
            <section className="main-facts">
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>React is not a framework, but a library for rendering your views</li>
                    <li>React makes changes to the virtual DOM which is quicker than updating the real DOM</li>
                </ul>
            </section>
        </main>
    )
}