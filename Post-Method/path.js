const path =require('path')

//!Path.join() method -->important
//? Join all arguments together and normalize the resulting path. Arguments must be strings
// console.log(path.join(__dirname + "/Karthik"));
// console.log(path.join(__filename + "/Karthik" + "Qspiders"));
// console.log(path.join(__filename + "/Karthik" + "Qspiders", "..", "...", "..."));

//!Path.extname() ->method
//?Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
// console.log(path.extname('demo.java'))

//!path.basename() -> method
// ?Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
// console.log(path.basename('/karthik,gokul'));

//! path.normalize() ->method
//?Normalize a string path, reducing '..' and '.' parts. When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
// console.log(path.normalize("../public///Karthik"));


//! path.resolve
// ?Starting from leftmost {from} parameter,resolves {to} to an absolute path
// console.log(path.resolve("Karthik","./path.txt"));

// Returns an object from a path string-the opposite of format().
// console.log(path.parse(__filename))


// Return the directory name of a path. similar to the Unix dirname command.
// console.log(path.dirname(__filename))

// path.relative() -> method
//?Solve the relative path from {from} to {to}. At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
// console.log(path.relative("../../../Karthik","Karthi"));