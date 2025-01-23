// Here, React.createElement is Object which converted afterwards in root.render as HTML for rendering in browser bcoz it can understand html only and it converted with help of render()

const parent = React.createElement("div", { align: "center", xyz: "abc" }, [
	React.createElement("div", { className: "myDiv" }, [
		React.createElement(
			"h1",
			{ className: "headTag", id: "heading11" },
			"Hello I am h1 Tag"
		),
		React.createElement(
			"h2",
			{ className: "headTag", id: "heading21" },
			"Hello I am h2 Tag"
		),
	]),
	React.createElement("div", { className: "myDiv" }, [
		React.createElement(
			"h1",
			{ className: "headTag", id: "heading12" },
			"Hello I am h1 Tag"
		),
		React.createElement(
			"h2",
			{ className: "headTag", id: "heading22" },
			"Hello I am h2 Tag"
		),
	]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
