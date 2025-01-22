import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Javascript = () => {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(`// Write your JavaScript code here
console.log("Welcome to CodeKhmerLearning");`);
  const [output, setOutput] = useState("");

  // Function to execute JavaScript code
  const executeCode = () => {
    try {
      // Capture console.log output
      const originalConsoleLog = console.log;
      let logs = [];
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      // Execute the code
      eval(code);

      // Restore the original console.log
      console.log = originalConsoleLog;

      // Set the output
      setOutput(logs.join("\n"));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  // Automatically execute code when it changes
  useEffect(() => {
    executeCode();
  }, [code]);
  return (
    <>
      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-50 bg-gray-800 md:hidden transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        id="sidebar"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl"
            id="closeSidebar"
          >
            ×
          </button>
        </div>
        <div className="flex flex-col items-center text-white space-y-4 py-6 max-h-screen overflow-y-auto">
         
        </div>
      </div>

      {/* Button to toggle Sidebar (for mobile) */}
      <div className="fixed bottom-4 right-20 md:hidden transform px-20">
        <button
          onClick={() => setOpen(!open)} // Toggle open/close state
          className="p-3 bg-blue-500 hover:bg-blue-600 focus:outline-none shadow-lg"
        >
          <span className="text-white text-lg">☰</span>
        </button>
      </div>

      {/* Your Sidebar (Conditional Rendering based on `open` state) */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-gray-800 md:hidden transition-transform duration-300"
          id="sidebar"
        >
          <div className="flex justify-end p-6">
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center text-white space-y-4 py-6 max-h-screen overflow-y-auto">
          <ul className="space-y-4">
  <ul>
  <li>
  <a href="#introduction-to-php" class="hover:text-red-500">
    1. Introduction to PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#what-is-php" class="hover:text-red-500">
        1.1. What is PHP?
      </a>
    </li>
    <li>
      <a href="#history-and-features-of-php" class="hover:text-red-500">
        1.2. History and Features of PHP
      </a>
    </li>
    <li>
      <a href="#php-syntax-and-basic-structure" class="hover:text-red-500">
        1.3. PHP Syntax and Basic Structure
      </a>
    </li>
    <li>
      <a href="#running-php-on-a-server" class="hover:text-red-500">
        1.4. Running PHP on a Server
      </a>
    </li>
  </ul>
</li>

  </ul>
    {/* --------------------------------------------------------- */}
    <li>
  <a href="#php-basics" class="hover:text-red-500">
    2. PHP Basics
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#variables-and-data-types" class="hover:text-red-500">
        2.1. Variables and Data Types
      </a>
    </li>
    <li>
      <a href="#constants" class="hover:text-red-500">
        2.2. Constants
      </a>
    </li>
    <li>
      <a href="#operators-in-php" class="hover:text-red-500">
        2.3. Operators in PHP
      </a>
    </li>
    <li>
      <a href="#control-structures" class="hover:text-red-500">
        2.4. Control Structures (if-else, switch-case)
      </a>
    </li>
    <li>
      <a href="#loops" class="hover:text-red-500">
        2.5. Loops (for, while, do-while, foreach)
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#functions-in-php" class="hover:text-red-500">
    3. Functions in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#defining-and-calling-functions" class="hover:text-red-500">
        3.1. Defining and Calling Functions
      </a>
    </li>
    <li>
      <a href="#function-parameters-and-return-values" class="hover:text-red-500">
        3.2. Function Parameters and Return Values
      </a>
    </li>
    <li>
      <a href="#variable-scope-and-global-variables" class="hover:text-red-500">
        3.3. Variable Scope and Global Variables
      </a>
    </li>
    <li>
      <a href="#built-in-php-functions" class="hover:text-red-500">
        3.4. Built-in PHP Functions
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#arrays-in-php" class="hover:text-red-500">
    4. Arrays in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#indexed-arrays" class="hover:text-red-500">
        4.1. Indexed Arrays
      </a>
    </li>
    <li>
      <a href="#associative-arrays" class="hover:text-red-500">
        4.2. Associative Arrays
      </a>
    </li>
    <li>
      <a href="#multidimensional-arrays" class="hover:text-red-500">
        4.3. Multidimensional Arrays
      </a>
    </li>
    <li>
      <a href="#array-functions" class="hover:text-red-500">
        4.4. Array Functions
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#strings-in-php" class="hover:text-red-500">
    5. Strings in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#string-manipulation-functions" class="hover:text-red-500">
        5.1. String Manipulation Functions
      </a>
    </li>
    <li>
      <a href="#string-concatenation" class="hover:text-red-500">
        5.2. String Concatenation
      </a>
    </li>
    <li>
      <a href="#regular-expressions-in-php" class="hover:text-red-500">
        5.3. Regular Expressions in PHP
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}

  <li>
  <a href="#superglobals-in-php" class="hover:text-red-500">
    6. Superglobals in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#get-and-post" class="hover:text-red-500">
        6.1. $_GET and $_POST
      </a>
    </li>
    <li>
      <a href="#request" class="hover:text-red-500">
        6.2. $_REQUEST
      </a>
    </li>
    <li>
      <a href="#server" class="hover:text-red-500">
        6.3. $_SERVER
      </a>
    </li>
    <li>
      <a href="#session-and-cookie" class="hover:text-red-500">
        6.4. $_SESSION and $_COOKIE
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#forms-and-user-input" class="hover:text-red-500">
    7. Forms and User Input
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#handling-form-data" class="hover:text-red-500">
        7.1. Handling Form Data
      </a>
    </li>
    <li>
      <a href="#form-validation" class="hover:text-red-500">
        7.2. Form Validation
      </a>
    </li>
    <li>
      <a href="#preventing-sql-injection-and-xss" class="hover:text-red-500">
        7.3. Preventing SQL Injection and XSS
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#working-with-files-in-php" class="hover:text-red-500">
    8. Working with Files in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#file-handling-read-write" class="hover:text-red-500">
        8.1. File Handling (Read/Write)
      </a>
    </li>
    <li>
      <a href="#uploading-files" class="hover:text-red-500">
        8.2. Uploading Files
      </a>
    </li>
    <li>
      <a href="#handling-csv-and-json-files" class="hover:text-red-500">
        8.3. Handling CSV and JSON Files
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#object-oriented-programming-in-php" class="hover:text-red-500">
    9. Object-Oriented Programming (OOP) in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#classes-and-objects" class="hover:text-red-500">
        9.1. Classes and Objects
      </a>
    </li>
    <li>
      <a href="#constructors-and-destructors" class="hover:text-red-500">
        9.2. Constructors and Destructors
      </a>
    </li>
    <li>
      <a href="#inheritance-and-polymorphism" class="hover:text-red-500">
        9.3. Inheritance and Polymorphism
      </a>
    </li>
    <li>
      <a href="#interfaces-and-abstract-classes" class="hover:text-red-500">
        9.4. Interfaces and Abstract Classes
      </a>
    </li>
    <li>
      <a href="#traits-in-php" class="hover:text-red-500">
        9.5. Traits in PHP
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-and-mysql" class="hover:text-red-500">
    10. PHP and MySQL
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#connecting-to-a-database" class="hover:text-red-500">
        10.1. Connecting to a Database
      </a>
    </li>
    <li>
      <a href="#crud-operations" class="hover:text-red-500">
        10.2. CRUD Operations (Create, Read, Update, Delete)
      </a>
    </li>
    <li>
      <a href="#prepared-statements-and-security" class="hover:text-red-500">
        10.3. Prepared Statements and Security
      </a>
    </li>
    <li>
      <a href="#using-pdo-for-database-interaction" class="hover:text-red-500">
        10.4. Using PDO for Database Interaction
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#sessions-and-cookies" class="hover:text-red-500">
    11. Sessions and Cookies
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#managing-sessions" class="hover:text-red-500">
        11.1. Managing Sessions
      </a>
    </li>
    <li>
      <a href="#using-cookies-for-user-tracking" class="hover:text-red-500">
        11.2. Using Cookies for User Tracking
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-and-ajax" class="hover:text-red-500">
    12. PHP and AJAX
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#handling-asynchronous-requests" class="hover:text-red-500">
        12.1. Handling Asynchronous Requests
      </a>
    </li>
    <li>
      <a href="#fetch-api-and-php" class="hover:text-red-500">
        12.2. Fetch API and PHP
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-security" class="hover:text-red-500">
    13. PHP Security
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#input-validation-and-sanitization" class="hover:text-red-500">
        13.1. Input Validation and Sanitization
      </a>
    </li>
    <li>
      <a href="#protecting-against-sql-injection" class="hover:text-red-500">
        13.2. Protecting Against SQL Injection
      </a>
    </li>
    <li>
      <a href="#preventing-cross-site-scripting-xss" class="hover:text-red-500">
        13.3. Preventing Cross-Site Scripting (XSS)
      </a>
    </li>
    <li>
      <a href="#password-hashing-and-authentication" class="hover:text-red-500">
        13.4. Password Hashing and Authentication
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#working-with-apis-in-php" class="hover:text-red-500">
    14. Working with APIs in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#consuming-rest-apis" class="hover:text-red-500">
        14.1. Consuming REST APIs
      </a>
    </li>
    <li>
      <a href="#creating-restful-apis-with-php" class="hover:text-red-500">
        14.2. Creating RESTful APIs with PHP
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-frameworks" class="hover:text-red-500">
    15. PHP Frameworks
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#introduction-to-laravel" class="hover:text-red-500">
        15.1. Introduction to Laravel
      </a>
    </li>
    <li>
      <a href="#routing-and-controllers" class="hover:text-red-500">
        15.2. Routing and Controllers
      </a>
    </li>
    <li>
      <a href="#blade-templates" class="hover:text-red-500">
        15.3. Blade Templates
      </a>
    </li>
    <li>
      <a href="#eloquent-orm" class="hover:text-red-500">
        15.4. Eloquent ORM
      </a>
    </li>
  </ul>
</li>

{/* ---------------------------------------------------------------- */}

  {/* Add similar nested lists for remaining modules */}
</ul>
          </div>
        </div>
      )}

      

     <div className="flex">
  {/* Sidebar សម្រាប់ Desktop */}
  <div className="hidden md:block w-2/4  p-6  overflow-y-auto max-h-[1000px]">
    <h2 className="text-xl font-bold mb-6">មេរៀនកម្មវិធី PHP</h2>
    <ul className="space-y-4">
  <ul>
  <li>
  <a href="#introduction-to-php" class="hover:text-red-500">
    1. Introduction to PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#what-is-php" class="hover:text-red-500">
        1.1. What is PHP?
      </a>
    </li>
    <li>
      <a href="#history-and-features-of-php" class="hover:text-red-500">
        1.2. History and Features of PHP
      </a>
    </li>
    <li>
      <a href="#php-syntax-and-basic-structure" class="hover:text-red-500">
        1.3. PHP Syntax and Basic Structure
      </a>
    </li>
    <li>
      <a href="#running-php-on-a-server" class="hover:text-red-500">
        1.4. Running PHP on a Server
      </a>
    </li>
  </ul>
</li>

  </ul>
    {/* --------------------------------------------------------- */}
    <li>
  <a href="#php-basics" class="hover:text-red-500">
    2. PHP Basics
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#variables-and-data-types" class="hover:text-red-500">
        2.1. Variables and Data Types
      </a>
    </li>
    <li>
      <a href="#constants" class="hover:text-red-500">
        2.2. Constants
      </a>
    </li>
    <li>
      <a href="#operators-in-php" class="hover:text-red-500">
        2.3. Operators in PHP
      </a>
    </li>
    <li>
      <a href="#control-structures" class="hover:text-red-500">
        2.4. Control Structures (if-else, switch-case)
      </a>
    </li>
    <li>
      <a href="#loops" class="hover:text-red-500">
        2.5. Loops (for, while, do-while, foreach)
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#functions-in-php" class="hover:text-red-500">
    3. Functions in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#defining-and-calling-functions" class="hover:text-red-500">
        3.1. Defining and Calling Functions
      </a>
    </li>
    <li>
      <a href="#function-parameters-and-return-values" class="hover:text-red-500">
        3.2. Function Parameters and Return Values
      </a>
    </li>
    <li>
      <a href="#variable-scope-and-global-variables" class="hover:text-red-500">
        3.3. Variable Scope and Global Variables
      </a>
    </li>
    <li>
      <a href="#built-in-php-functions" class="hover:text-red-500">
        3.4. Built-in PHP Functions
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#arrays-in-php" class="hover:text-red-500">
    4. Arrays in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#indexed-arrays" class="hover:text-red-500">
        4.1. Indexed Arrays
      </a>
    </li>
    <li>
      <a href="#associative-arrays" class="hover:text-red-500">
        4.2. Associative Arrays
      </a>
    </li>
    <li>
      <a href="#multidimensional-arrays" class="hover:text-red-500">
        4.3. Multidimensional Arrays
      </a>
    </li>
    <li>
      <a href="#array-functions" class="hover:text-red-500">
        4.4. Array Functions
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#strings-in-php" class="hover:text-red-500">
    5. Strings in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#string-manipulation-functions" class="hover:text-red-500">
        5.1. String Manipulation Functions
      </a>
    </li>
    <li>
      <a href="#string-concatenation" class="hover:text-red-500">
        5.2. String Concatenation
      </a>
    </li>
    <li>
      <a href="#regular-expressions-in-php" class="hover:text-red-500">
        5.3. Regular Expressions in PHP
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}

  <li>
  <a href="#superglobals-in-php" class="hover:text-red-500">
    6. Superglobals in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#get-and-post" class="hover:text-red-500">
        6.1. $_GET and $_POST
      </a>
    </li>
    <li>
      <a href="#request" class="hover:text-red-500">
        6.2. $_REQUEST
      </a>
    </li>
    <li>
      <a href="#server" class="hover:text-red-500">
        6.3. $_SERVER
      </a>
    </li>
    <li>
      <a href="#session-and-cookie" class="hover:text-red-500">
        6.4. $_SESSION and $_COOKIE
      </a>
    </li>
  </ul>
</li>
  {/* --------------------------------------------------------- */}
  <li>
  <a href="#forms-and-user-input" class="hover:text-red-500">
    7. Forms and User Input
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#handling-form-data" class="hover:text-red-500">
        7.1. Handling Form Data
      </a>
    </li>
    <li>
      <a href="#form-validation" class="hover:text-red-500">
        7.2. Form Validation
      </a>
    </li>
    <li>
      <a href="#preventing-sql-injection-and-xss" class="hover:text-red-500">
        7.3. Preventing SQL Injection and XSS
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#working-with-files-in-php" class="hover:text-red-500">
    8. Working with Files in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#file-handling-read-write" class="hover:text-red-500">
        8.1. File Handling (Read/Write)
      </a>
    </li>
    <li>
      <a href="#uploading-files" class="hover:text-red-500">
        8.2. Uploading Files
      </a>
    </li>
    <li>
      <a href="#handling-csv-and-json-files" class="hover:text-red-500">
        8.3. Handling CSV and JSON Files
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#object-oriented-programming-in-php" class="hover:text-red-500">
    9. Object-Oriented Programming (OOP) in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#classes-and-objects" class="hover:text-red-500">
        9.1. Classes and Objects
      </a>
    </li>
    <li>
      <a href="#constructors-and-destructors" class="hover:text-red-500">
        9.2. Constructors and Destructors
      </a>
    </li>
    <li>
      <a href="#inheritance-and-polymorphism" class="hover:text-red-500">
        9.3. Inheritance and Polymorphism
      </a>
    </li>
    <li>
      <a href="#interfaces-and-abstract-classes" class="hover:text-red-500">
        9.4. Interfaces and Abstract Classes
      </a>
    </li>
    <li>
      <a href="#traits-in-php" class="hover:text-red-500">
        9.5. Traits in PHP
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-and-mysql" class="hover:text-red-500">
    10. PHP and MySQL
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#connecting-to-a-database" class="hover:text-red-500">
        10.1. Connecting to a Database
      </a>
    </li>
    <li>
      <a href="#crud-operations" class="hover:text-red-500">
        10.2. CRUD Operations (Create, Read, Update, Delete)
      </a>
    </li>
    <li>
      <a href="#prepared-statements-and-security" class="hover:text-red-500">
        10.3. Prepared Statements and Security
      </a>
    </li>
    <li>
      <a href="#using-pdo-for-database-interaction" class="hover:text-red-500">
        10.4. Using PDO for Database Interaction
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#sessions-and-cookies" class="hover:text-red-500">
    11. Sessions and Cookies
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#managing-sessions" class="hover:text-red-500">
        11.1. Managing Sessions
      </a>
    </li>
    <li>
      <a href="#using-cookies-for-user-tracking" class="hover:text-red-500">
        11.2. Using Cookies for User Tracking
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-and-ajax" class="hover:text-red-500">
    12. PHP and AJAX
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#handling-asynchronous-requests" class="hover:text-red-500">
        12.1. Handling Asynchronous Requests
      </a>
    </li>
    <li>
      <a href="#fetch-api-and-php" class="hover:text-red-500">
        12.2. Fetch API and PHP
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-security" class="hover:text-red-500">
    13. PHP Security
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#input-validation-and-sanitization" class="hover:text-red-500">
        13.1. Input Validation and Sanitization
      </a>
    </li>
    <li>
      <a href="#protecting-against-sql-injection" class="hover:text-red-500">
        13.2. Protecting Against SQL Injection
      </a>
    </li>
    <li>
      <a href="#preventing-cross-site-scripting-xss" class="hover:text-red-500">
        13.3. Preventing Cross-Site Scripting (XSS)
      </a>
    </li>
    <li>
      <a href="#password-hashing-and-authentication" class="hover:text-red-500">
        13.4. Password Hashing and Authentication
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#working-with-apis-in-php" class="hover:text-red-500">
    14. Working with APIs in PHP
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#consuming-rest-apis" class="hover:text-red-500">
        14.1. Consuming REST APIs
      </a>
    </li>
    <li>
      <a href="#creating-restful-apis-with-php" class="hover:text-red-500">
        14.2. Creating RESTful APIs with PHP
      </a>
    </li>
  </ul>
</li>
{/* ---------------------------------------------------------------- */}
<li>
  <a href="#php-frameworks" class="hover:text-red-500">
    15. PHP Frameworks
  </a>
  <ul class="ml-4 space-y-2">
    <li>
      <a href="#introduction-to-laravel" class="hover:text-red-500">
        15.1. Introduction to Laravel
      </a>
    </li>
    <li>
      <a href="#routing-and-controllers" class="hover:text-red-500">
        15.2. Routing and Controllers
      </a>
    </li>
    <li>
      <a href="#blade-templates" class="hover:text-red-500">
        15.3. Blade Templates
      </a>
    </li>
    <li>
      <a href="#eloquent-orm" class="hover:text-red-500">
        15.4. Eloquent ORM
      </a>
    </li>
  </ul>
</li>

{/* ---------------------------------------------------------------- */}

  {/* Add similar nested lists for remaining modules */}
</ul>

  </div>

      <div className="py-12 px-6 w-full overflow-y-auto max-h-[1000px]">
      <div id="Maincontent" class="py-12 px-6 overflow-y-auto">
  <div id="introduction-to-php" class="mt-8">
    <h2 class="text-3xl font-semibold text-blue-600">1. ការណែនាំអំពី PHP</h2>
    <p class="mt-4 text-lg">
      PHP គឺជាភាសាសរសេរស្គ្រីបដែលត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍគេហទំព័រឌីណាមិក។ វាត្រូវបានប្រើសម្រាប់បង្កើតកម្មវិធីគេហទំព័រដែលមានភាពអន្តរកម្មខ្ពស់ និងអាចភ្ជាប់ជាមួយមូលដ្ឋានទិន្នន័យ។
    </p>
  </div>

  <div id="what-is-php" class="mt-8">
    <h3 class="text-2xl font-semibold text-blue-600">1.1. តើ PHP គឺជាអ្វី?</h3>
    <p class="mt-2">
      PHP គឺជាភាសាសរសេរស្គ្រីបដែលត្រូវបានប្រើសម្រាប់ការអភិវឌ្ឍគេហទំព័រឌីណាមិក។ វាត្រូវបានបង្កើតឡើងដោយ Rasmus Lerdorf នៅឆ្នាំ 1994។ PHP មានន័យថា "PHP: Hypertext Preprocessor"។
    </p>
    <pre class="bg-gray-800 text-white p-4 rounded mt-2">
      <code class="language-php">
&lt;?php
  echo "Hello, World!";
?&gt;
      </code>
    </pre>
    <p class="mt-2"><strong>លទ្ធផល៖</strong></p>
    <pre class="bg-gray-800 text-white p-4 rounded">
      <code class="language-plaintext">
Hello, World!
      </code>
    </pre>
  </div>

  <div id="history-and-features-of-php" class="mt-8">
    <h3 class="text-2xl font-semibold text-blue-600">1.2. ប្រវត្តិនិងលក្ខណៈពិសេសនៃ PHP</h3>
    <p class="mt-2">
      PHP ត្រូវបានបង្កើតឡើងដោយ Rasmus Lerdorf នៅឆ្នាំ 1994។ វាត្រូវបានគេប្រើជាមធ្យោបាយសម្រាប់តាមដានការចូលមើលរបស់អ្នកប្រើប្រាស់នៅលើគេហទំព័រផ្ទាល់ខ្លួនរបស់គាត់។ ក្រោយមក PHP បានអភិវឌ្ឍជាភាសាសរសេរស្គ្រីបពេញលេញសម្រាប់ការអភិវឌ្ឍគេហទំព័រ។
    </p>
    <p class="mt-2">
      <strong>លក្ខណៈពិសេសនៃ PHP:</strong>
      <ul class="list-disc ml-8">
        <li>អាចប្រើប្រាស់ជាមួយ HTML បានយ៉ាងងាយស្រួល។</li>
        <li>គាំទ្រការភ្ជាប់មូលដ្ឋានទិន្នន័យជាច្រើន ដូចជា MySQL, PostgreSQL, MongoDB។</li>
        <li>មានសហគមន៍ធំ និងឯកសារដ៏សម្បូរបែប។</li>
      </ul>
    </p>
  </div>

  <div id="php-syntax-and-basic-structure" class="mt-8">
    <h3 class="text-2xl font-semibold text-blue-600">1.3. វាក្យសម្ព័ន្ធនិងរចនាសម្ព័ន្ធមូលដ្ឋាននៃ PHP</h3>
    <p class="mt-2">
      PHP មានវាក្យសម្ព័ន្ធដ៏សាមញ្ញ និងងាយស្រួលយល់។ កូដ PHP ត្រូវបានដាក់នៅក្នុងស្លាក <code>&lt;?php ?&gt;</code>។ ឧទាហរណ៍៖
    </p>
    <pre class="bg-gray-800 text-white p-4 rounded mt-2">
      <code class="language-php">
&lt;?php
  $name = "John";
  echo "Hello, " . $name;
?&gt;
      </code>
    </pre>
    <p class="mt-2"><strong>លទ្ធផល៖</strong></p>
    <pre class="bg-gray-800 text-white p-4 rounded">
      <code class="language-plaintext">
Hello, John
      </code>
    </pre>
  </div>

  <div id="running-php-on-a-server" class="mt-8">
    <h3 class="text-2xl font-semibold text-blue-600">1.4. ការដំណើរការ PHP លើម៉ាស៊ីនបម្រើ</h3>
    <p class="mt-2">
      PHP ត្រូវបានដំណើរការនៅលើម៉ាស៊ីនបម្រើ (Server)។ ដើម្បីដំណើរការ PHP អ្នកត្រូវការម៉ាស៊ីនបម្រើដែលគាំទ្រកូដ PHP ដូចជា Apache ឬ Nginx។ អ្នកក៏អាចប្រើកម្មវិធីដូចជា XAMPP ឬ WAMP ដើម្បីដំឡើងម៉ាស៊ីនបម្រើក្នុងស្ថានីយរបស់អ្នក។
    </p>
    <p class="mt-2">
      <strong>ជំហានដើម្បីដំណើរការ PHP:</strong>
      <ol class="list-decimal ml-8">
        <li>ដំឡើងម៉ាស៊ីនបម្រើដូចជា XAMPP ឬ WAMP។</li>
        <li>បង្កើតឯកសារ PHP នៅក្នុងថត <code>htdocs</code> (សម្រាប់ XAMPP)។</li>
        <li>បើកឧបករណ៍រុករក និងវាយអាសយដ្ឋាន <code>localhost/yourfile.php</code>។</li>
      </ol>
    </p>
  </div>
</div>
{/* --------------------------------------------------------- */}
<div id="php-basics" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">2. PHP Basics</h2>
  <p className="mt-4 text-lg">
    PHP គឺជាភាសាស្គ្រីបដែលរត់នៅលើសឺវ័រ ដែលត្រូវបានរចនាឡើងសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីគោលគំនិតមូលដ្ឋាននៃ PHP រួមមានអថេរ ប្រភេទទិន្នន័យ ថេរ ប្រមាណវិធី ស្ថាបត្យកម្មគ្រប់គ្រង និងរង្វិលជុំ។
  </p>

  {/* 2.1 Variables and Data Types */}
  <div id="variables-and-data-types" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.1. អថេរ និងប្រភេទទិន្នន័យ</h3>
    <p className="mt-2">
      នៅក្នុង PHP អថេរត្រូវបានប្រើដើម្បីផ្ទុកទិន្នន័យ។ ពួកវាចាប់ផ្តើមដោយសញ្ញាដុល្លារ (`$`) ហើយបន្ទាប់ដោយឈ្មោះអថេរ។ PHP គាំទ្រប្រភេទទិន្នន័យផ្សេងៗ រួមមានឃ្លា (string) ចំនួនគត់ (integer) ចំនួនទសភាគ (float) តម្លៃប៊ូលីន (boolean) អារេ (array) និងវត្ថុ (object)។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ អថេរ និងប្រភេទទិន្នន័យ
$name = "John Doe"; // ឃ្លា
$age = 25; // ចំនួនគត់
$height = 5.9; // ចំនួនទសភាគ
$isStudent = true; // តម្លៃប៊ូលីន
$fruits = array("Apple", "Banana", "Orange"); // អារេ

echo "Name: $name, Age: $age, Height: $height";`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name: John Doe, Age: 25, Height: 5.9`}
    </SyntaxHighlighter>
  </div>

  {/* 2.2 Constants */}
  <div id="constants" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.2. ថេរ</h3>
    <p className="mt-2">
      ថេរគឺដូចអថេរ ប៉ុន្តែតម្លៃរបស់វាមិនអាចផ្លាស់ប្តូរបាននៅពេលដែលបានកំណត់។ ពួកវាត្រូវបានកំណត់ដោយប្រើអនុគមន៍ `define()` ឬពាក្យគន្លឹះ `const`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ថេរ
define("PI", 3.14159);
const SITE_NAME = "MyWebsite";

echo "PI: " . PI . ", Site Name: " . SITE_NAME;`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`PI: 3.14159, Site Name: MyWebsite`}
    </SyntaxHighlighter>
  </div>

  {/* 2.3 Operators in PHP */}
  <div id="operators-in-php" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.3. ប្រមាណវិធីនៅក្នុង PHP</h3>
    <p className="mt-2">
      PHP គាំទ្រប្រមាណវិធីផ្សេងៗ រួមមានប្រមាណវិធីគណនានព្វន្ធ ប្រមាណវិធីប្រៀបធៀប ប្រមាណវិធីតក្ក និងប្រមាណវិធីផ្សំ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ប្រមាណវិធី
$a = 10;
$b = 5;

$sum = $a + $b; // ប្រមាណវិធីបូក
$diff = $a - $b; // ប្រមាណវិធីដក
$product = $a * $b; // ប្រមាណវិធីគុណ
$quotient = $a / $b; // ប្រមាណវិធីចែក

echo "Sum: $sum, Difference: $diff, Product: $product, Quotient: $quotient";`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Sum: 15, Difference: 5, Product: 50, Quotient: 2`}
    </SyntaxHighlighter>
  </div>

  {/* 2.4 Control Structures */}
  <div id="control-structures" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.4. ស្ថាបត្យកម្មគ្រប់គ្រង (if-else, switch-case)</h3>
    <p className="mt-2">
      ស្ថាបត្យកម្មគ្រប់គ្រងអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងលំហូរនៃកម្មវិធីដោយផ្អែកលើលក្ខខណ្ឌ។ PHP គាំទ្រស្ថាបត្យកម្មដូចជា `if-else` និង `switch-case`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ if-else
$age = 20;

if ($age >= 18) {
  echo "You are an adult.";
} else {
  echo "You are a minor.";
}

// ឧទាហរណ៍៖ switch-case
$day = "Monday";

switch ($day) {
  case "Monday":
    echo "Today is Monday.";
    break;
  default:
    echo "Today is not Monday.";
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`You are an adult.
Today is Monday.`}
    </SyntaxHighlighter>
  </div>

  {/* 2.5 Loops */}
  <div id="loops" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">2.5. រង្វិលជុំ (for, while, do-while, foreach)</h3>
    <p className="mt-2">
      រង្វិលជុំអនុញ្ញាតឱ្យអ្នកអនុវត្តកូដដដែលៗដោយផ្អែកលើលក្ខខណ្ឌ។ PHP គាំទ្ររង្វិលជុំដូចជា `for`, `while`, `do-while`, និង `foreach`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ for loop
for ($i = 1; $i <= 5; $i++) {
  echo "Number: $i\n";
}

// ឧទាហរណ៍៖ foreach loop
$fruits = array("Apple", "Banana", "Orange");

foreach ($fruits as $fruit) {
  echo "$fruit\n";
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
Apple
Banana
Orange`}
    </SyntaxHighlighter>
  </div>
</div>

  {/* -------------------------Maincontent-------------------------------- */}

  <div id="functions-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">3. Functions in PHP</h2>
  <p className="mt-4 text-lg">
    អនុគមន៍នៅក្នុង PHP គឺជាផ្នែកមួយដ៏សំខាន់នៃការសរសេរកូដ។ ពួកវាអនុញ្ញាតឱ្យអ្នករៀបចំកូដជាប្លុកដែលអាចប្រើឡើងវិញបាន និងគ្រប់គ្រងលំហូរនៃកម្មវិធីយ៉ាងមានប្រសិទ្ធភាព។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការកំណត់និងហៅអនុគមន៍ ប៉ារ៉ាម៉ែត្រនិងតម្លៃត្រឡប់ វិសាលភាពអថេរ និងអនុគមន៍ដែលមានស្រាប់នៅក្នុង PHP។
  </p>

  {/* 3.1 Defining and Calling Functions */}
  <div id="defining-and-calling-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">3.1. Defining and Calling Functions</h3>
    <p className="mt-2">
      អនុគមន៍នៅក្នុង PHP ត្រូវបានកំណត់ដោយប្រើពាក្យគន្លឹះ `function`។ អ្នកអាចហៅអនុគមន៍នេះនៅពេលណាក៏បាន ដើម្បីអនុវត្តកូដដែលបានកំណត់នៅក្នុងអនុគមន៍។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ កំណត់និងហៅអនុគមន៍
function greet() {
  echo "Hello, World!";
}

greet(); // ហៅអនុគមន៍`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Hello, World!`}
    </SyntaxHighlighter>
  </div>

  {/* 3.2 Function Parameters and Return Values */}
  <div id="function-parameters-and-return-values" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">3.2. Function Parameters and Return Values</h3>
    <p className="mt-2">
      អនុគមន៍អាចទទួលប៉ារ៉ាម៉ែត្រដើម្បីធ្វើការជាមួយទិន្នន័យ និងត្រឡប់តម្លៃដោយប្រើពាក្យគន្លឹះ `return`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ប៉ារ៉ាម៉ែត្រនិងតម្លៃត្រឡប់
function add($a, $b) {
  return $a + $b;
}

$result = add(5, 3); // តម្លៃត្រឡប់គឺ 8
echo "Result: $result";`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Result: 8`}
    </SyntaxHighlighter>
  </div>

  {/* 3.3 Variable Scope and Global Variables */}
  <div id="variable-scope-and-global-variables" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">3.3. Variable Scope and Global Variables</h3>
    <p className="mt-2">
      អថេរដែលបានកំណត់នៅក្នុងអនុគមន៍មានវិសាលភាពក្នុងមុខងារនោះ។ ដើម្បីចូលប្រើអថេរក្រៅមុខងារ អ្នកអាចប្រើពាក្យគន្លឹះ `global`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ វិសាលភាពអថេរ និងអថេរសកល
$x = 10; // អថេរសកល

function test() {
  global $x; // ចូលប្រើអថេរសកល
  echo "Value of x: $x";
}

test();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Value of x: 10`}
    </SyntaxHighlighter>
  </div>

  {/* 3.4 Built-in PHP Functions */}
  <div id="built-in-php-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">3.4. Built-in PHP Functions</h3>
    <p className="mt-2">
      PHP មានអនុគមន៍ដែលមានស្រាប់ជាច្រើន ដែលអ្នកអាចប្រើដើម្បីអនុវត្តកិច្ចការផ្សេងៗ ដូចជាការធ្វើម៉ាស៊ីនគិតលេខ ការគ្រប់គ្រងឃ្លា និងការងារផ្សេងៗទៀត។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ អនុគមន៍ដែលមានស្រាប់
$string = "Hello, World!";
echo "Length: " . strlen($string); // ប្រវែងឃ្លា
echo "Uppercase: " . strtoupper($string); // បំប្លែងអក្សរធំ`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Length: 13
Uppercase: HELLO, WORLD!`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}

 <div id="arrays-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">4. Arrays in PHP</h2>
  <p className="mt-4 text-lg">
    អារេ (Arrays) នៅក្នុង PHP គឺជាប្រភេទទិន្នន័យដែលអនុញ្ញាតឱ្យអ្នកផ្ទុកតម្លៃច្រើនក្នុងអថេរតែមួយ។ អារេអាចមានប្រភេទផ្សេងៗ ដូចជា អារេដែលមានសន្ទស្សន៍ (Indexed Arrays) អារេដែលមានគោលគំនិត (Associative Arrays) និងអារេពហុវិមាត្រ (Multidimensional Arrays)។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីប្រភេទអារេទាំងនេះ ព្រមទាំងមុខងារដែលផ្តល់ដោយ PHP ដើម្បីគ្រប់គ្រងអារេ។
  </p>

  {/* 4.1 Indexed Arrays */}
  <div id="indexed-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">4.1. Indexed Arrays</h3>
    <p className="mt-2">
      អារេដែលមានសន្ទស្សន៍ (Indexed Arrays) គឺជាអារេដែលតម្លៃត្រូវបានចងភ្ជាប់ជាមួយសន្ទស្សន៍លេខ។ សន្ទស្សន៍ចាប់ផ្តើមពីលេខ 0។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ អារេដែលមានសន្ទស្សន៍
$fruits = array("Apple", "Banana", "Orange");

echo "First fruit: " . $fruits[0]; // ទទួលបានតម្លៃដំបូង`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`First fruit: Apple`}
    </SyntaxHighlighter>
  </div>

  {/* 4.2 Associative Arrays */}
  <div id="associative-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">4.2. Associative Arrays</h3>
    <p className="mt-2">
      អារេដែលមានគោលគំនិត (Associative Arrays) គឺជាអារេដែលតម្លៃត្រូវបានចងភ្ជាប់ជាមួយសន្ទស្សន៍ដែលមានឈ្មោះ (keys)។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ អារេដែលមានគោលគំនិត
$person = array("name" => "John", "age" => 25, "city" => "Phnom Penh");

echo "Name: " . $person["name"]; // ទទួលបានតម្លៃដោយប្រើ key`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name: John`}
    </SyntaxHighlighter>
  </div>

  {/* 4.3 Multidimensional Arrays */}
  <div id="multidimensional-arrays" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">4.3. Multidimensional Arrays</h3>
    <p className="mt-2">
      អារេពហុវិមាត្រ (Multidimensional Arrays) គឺជាអារេដែលមានអារេផ្សេងៗនៅក្នុងវា។ វាអនុញ្ញាតឱ្យអ្នកផ្ទុកទិន្នន័យក្នុងទម្រង់តារាង។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ អារេពហុវិមាត្រ
$students = array(
  array("name" => "John", "age" => 20),
  array("name" => "Jane", "age" => 22),
  array("name" => "Doe", "age" => 21)
);

echo "First student name: " . $students[0]["name"]; // ទទួលបានតម្លៃពីអារេពហុវិមាត្រ`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`First student name: John`}
    </SyntaxHighlighter>
  </div>

  {/* 4.4 Array Functions */}
  <div id="array-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">4.4. Array Functions</h3>
    <p className="mt-2">
      PHP ផ្តល់មុខងារជាច្រើនដើម្បីគ្រប់គ្រងអារេ។ មុខងារទាំងនេះអនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយអារេយ៉ាងមានប្រសិទ្ធភាព ដូចជាការបញ្ចូល ការលុប ការស្វែងរក និងការរៀបចំអារេ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ មុខងារអារេ
$fruits = array("Apple", "Banana", "Orange");

// រាប់ចំនួនធាតុក្នុងអារេ
echo "Total fruits: " . count($fruits);

// បញ្ចូលធាតុថ្មីទៅអារេ
array_push($fruits, "Mango");
print_r($fruits);`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Total fruits: 3
Array
(
    [0] => Apple
    [1] => Banana
    [2] => Orange
    [3] => Mango
)`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="strings-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">5. Strings in PHP</h2>
  <p className="mt-4 text-lg">
    ឃ្លា (Strings) នៅក្នុង PHP គឺជាប្រភេទទិន្នន័យដែលផ្ទុកអក្សរ ឬអត្ថបទ។ PHP ផ្តល់មុខងារជាច្រើនដើម្បីធ្វើការជាមួយឃ្លា ដូចជាការបំបែក ការភ្ជាប់ ការស្វែងរក និងការជំនួស។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីមុខងារដែលពាក់ព័ន្ធនឹងឃ្លា ការភ្ជាប់ឃ្លា និងការប្រើកន្សោមធម្មតា (Regular Expressions)។
  </p>

  {/* 5.1 String Manipulation Functions */}
  <div id="string-manipulation-functions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">5.1. String Manipulation Functions</h3>
    <p className="mt-2">
      PHP ផ្តល់មុខងារជាច្រើនដើម្បីធ្វើការជាមួយឃ្លា។ មុខងារទាំងនេះអនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយឃ្លាយ៉ាងមានប្រសិទ្ធភាព ដូចជាការបំបែក ការស្វែងរក និងការផ្លាស់ប្តូរឃ្លា។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ មុខងារធ្វើការជាមួយឃ្លា
$text = "Hello, World!";

// ប្រវែងឃ្លា
echo "Length: " . strlen($text);

// បំបែកឃ្លាជាអក្សរតូច
echo "Lowercase: " . strtolower($text);

// បំបែកឃ្លាជាអក្សរធំ
echo "Uppercase: " . strtoupper($text);`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Length: 13
Lowercase: hello, world!
Uppercase: HELLO, WORLD!`}
    </SyntaxHighlighter>
  </div>

  {/* 5.2 String Concatenation */}
  <div id="string-concatenation" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">5.2. String Concatenation</h3>
    <p className="mt-2">
      ការភ្ជាប់ឃ្លា (String Concatenation) គឺជាការតភ្ជាប់ឃ្លាពីរ ឬច្រើនជាមួយគ្នា។ នៅក្នុង PHP អ្នកអាចប្រើសញ្ញា `.` ដើម្បីភ្ជាប់ឃ្លា។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការភ្ជាប់ឃ្លា
$firstName = "John";
$lastName = "Doe";

// ភ្ជាប់ឃ្លា
$fullName = $firstName . " " . $lastName;
echo "Full Name: " . $fullName;`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Full Name: John Doe`}
    </SyntaxHighlighter>
  </div>

  {/* 5.3 Regular Expressions in PHP */}
  <div id="regular-expressions-in-php" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">5.3. Regular Expressions in PHP</h3>
    <p className="mt-2">
      កន្សោមធម្មតា (Regular Expressions) គឺជាវិធីដ៏មានឥទ្ធិពលដើម្បីស្វែងរក ឬផ្លាស់ប្តូរឃ្លាដោយប្រើលំនាំ។ PHP គាំទ្រកន្សោមធម្មតាតាមរយៈមុខងារ `preg_match` និង `preg_replace`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ កន្សោមធម្មតា
$text = "The quick brown fox jumps over the lazy dog.";

// ស្វែងរកពាក្យ "fox"
if (preg_match("/fox/", $text)) {
  echo "Found 'fox' in the text.";
}

// ជំនួសពាក្យ "dog" ជាមួយ "cat"
$newText = preg_replace("/dog/", "cat", $text);
echo "New Text: " . $newText;`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Found 'fox' in the text.
New Text: The quick brown fox jumps over the lazy cat.`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}

 <div id="superglobals-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">6. Superglobals in PHP</h2>
  <p className="mt-4 text-lg">
    Superglobals គឺជាអថេរពិសេសនៅក្នុង PHP ដែលមានភាពងាយស្រួលក្នុងការចូលប្រើពីគ្រប់ទីកន្លែងនៅក្នុងស្គ្រីប។ ពួកវាត្រូវបានប្រើដើម្បីចូលប្រើទិន្នន័យពីទម្រង់ (forms) កុហក (cookies) និងព័ត៌មានអំពីសឺវ័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពី Superglobals ដូចជា `$_GET`, `$_POST`, `$_REQUEST`, `$_SERVER`, `$_SESSION`, និង `$_COOKIE`។
  </p>

  {/* 6.1 $_GET and $_POST */}
  <div id="get-and-post" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">6.1. $_GET and $_POST</h3>
    <p className="mt-2">
      `$_GET` និង `$_POST` គឺជា Superglobals ដែលត្រូវបានប្រើដើម្បីចូលប្រើទិន្នន័យដែលបានផ្ញើតាមរយៈទម្រង់ HTML ដោយប្រើវិធីសាស្ត្រ GET ឬ POST។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ $_GET
// URL: http://example.com?name=John&age=25
echo "Name: " . $_GET['name']; // John
echo "Age: " . $_GET['age']; // 25

// ឧទាហរណ៍៖ $_POST
// ទម្រង់ HTML ដែលប្រើ method="POST"
echo "Name: " . $_POST['name'];
echo "Age: " . $_POST['age'];`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name: John
Age: 25`}
    </SyntaxHighlighter>
  </div>

  {/* 6.2 $_REQUEST */}
  <div id="request" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">6.2. $_REQUEST</h3>
    <p className="mt-2">
      `$_REQUEST` គឺជា Superglobal ដែលផ្ទុកទិន្នន័យដែលបានផ្ញើតាមរយៈទម្រង់ HTML ដោយប្រើវិធីសាស្ត្រ GET, POST, ឬ COOKIE។ វាជាការរួមបញ្ចូលនៃ `$_GET`, `$_POST`, និង `$_COOKIE`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ $_REQUEST
// URL: http://example.com?name=John
echo "Name: " . $_REQUEST['name']; // John`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name: John`}
    </SyntaxHighlighter>
  </div>

  {/* 6.3 $_SERVER */}
  <div id="server" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">6.3. $_SERVER</h3>
    <p className="mt-2">
      `$_SERVER` គឺជា Superglobal ដែលផ្ទុកព័ត៌មានអំពីសឺវ័រ និងបរិស្ថាននៃកម្មវិធី។ វាផ្តល់ព័ត៌មានដូចជា URL បច្ចុប្បន្ន វិធីសាស្ត្រស្នើសុំ (request method) និងព័ត៌មានផ្សេងៗទៀត។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ $_SERVER
echo "Server Name: " . $_SERVER['SERVER_NAME']; // example.com
echo "Request Method: " . $_SERVER['REQUEST_METHOD']; // GET or POST
echo "Script Name: " . $_SERVER['SCRIPT_NAME']; // /index.php`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Server Name: example.com
Request Method: GET
Script Name: /index.php`}
    </SyntaxHighlighter>
  </div>

  {/* 6.4 $_SESSION and $_COOKIE */}
  <div id="session-and-cookie" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">6.4. $_SESSION and $_COOKIE</h3>
    <p className="mt-2">
      `$_SESSION` និង `$_COOKIE` គឺជា Superglobals ដែលត្រូវបានប្រើដើម្បីគ្រប់គ្រងសម័យ (sessions) និងកុហក (cookies)។ `$_SESSION` ផ្ទុកទិន្នន័យដែលត្រូវបានរក្សាទុកនៅលើសឺវ័រ ខណៈពេលដែល `$_COOKIE` ផ្ទុកទិន្នន័យដែលត្រូវបានរក្សាទុកនៅលើកុំព្យូទ័រអ្នកប្រើប្រាស់។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ $_SESSION
session_start();
$_SESSION['username'] = 'JohnDoe';
echo "Session Username: " . $_SESSION['username']; // JohnDoe

// ឧទាហរណ៍៖ $_COOKIE
setcookie("user", "JohnDoe", time() + 3600, "/");
echo "Cookie User: " . $_COOKIE['user']; // JohnDoe`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Session Username: JohnDoe
Cookie User: JohnDoe`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="forms-and-user-input" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">7. សំណុំបែបបទ និងការបញ្ចូលពីអ្នកប្រើ</h2>
  <p className="mt-4 text-lg">
    សំណុំបែបបទ (Forms) គឺជាផ្នែកមួយដ៏សំខាន់នៃការអភិវឌ្ឍន៍គេហទំព័រ។ ពួកវាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បញ្ចូលទិន្នន័យ ហើយទិន្នន័យនេះត្រូវបានផ្ញើទៅសឺវ័រដើម្បីដោះស្រាយ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រងទិន្នន័យពីសំណុំបែបបទ ការធ្វើសុពលភាពទិន្នន័យ និងការការពារការវាយប្រហារដូចជា SQL Injection និង XSS។
  </p>

  {/* 7.1 Handling Form Data */}
  <div id="handling-form-data" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">7.1. ការគ្រប់គ្រងទិន្នន័យពីសំណុំបែបបទ</h3>
    <p className="mt-2">
      ទិន្នន័យពីសំណុំបែបបទអាចត្រូវបានផ្ញើតាមរយៈវិធីសាស្ត្រ GET ឬ POST។ PHP ផ្តល់ Superglobals ដូចជា `$_GET` និង `$_POST` ដើម្បីចូលប្រើទិន្នន័យនេះ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការគ្រប់គ្រងទិន្នន័យពីសំណុំបែបបទ
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  echo "Name: $name, Email: $email";
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name: John Doe, Email: john@example.com`}
    </SyntaxHighlighter>
  </div>

  {/* 7.2 Form Validation */}
  <div id="form-validation" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">7.2. ការធ្វើសុពលភាពទិន្នន័យពីសំណុំបែបបទ</h3>
    <p className="mt-2">
      ការធ្វើសុពលភាពទិន្នន័យគឺជាដំណើរការនៃការធានាថាទិន្នន័យដែលបានបញ្ចូលដោយអ្នកប្រើប្រាស់គឺត្រឹមត្រូវ និងសុវត្ថិភាព។ នេះអាចរួមបញ្ចូលការពិនិត្យថាតើអ្នកប្រើប្រាស់បានបញ្ចូលអ៊ីមែលត្រឹមត្រូវ ឬថាតើវាលចាំបាច់ត្រូវបានបំពេញ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការធ្វើសុពលភាពទិន្នន័យ
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];

  if (empty($name)) {
    echo "Name is required.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
  } else {
    echo "Form submitted successfully!";
  }
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Form submitted successfully!`}
    </SyntaxHighlighter>
  </div>

  {/* 7.3 Preventing SQL Injection and XSS */}
  <div id="preventing-sql-injection-and-xss" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">7.3. ការការពារ SQL Injection និង XSS</h3>
    <p className="mt-2">
      SQL Injection និង XSS (Cross-Site Scripting) គឺជាការវាយប្រហារសុវត្ថិភាពដែលអាចបង្កឱ្យមានការខូចខាតធ្ងន់ធ្ងរដល់កម្មវិធីរបស់អ្នក។ ដើម្បីការពារការវាយប្រហារទាំងនេះ អ្នកគួរតែប្រើមុខងារដូចជា `mysqli_real_escape_string` ឬ `htmlspecialchars`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការការពារ SQL Injection
$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);

// ឧទាហរណ៍៖ ការការពារ XSS
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`ទិន្នន័យត្រូវបានការពារពី SQL Injection និង XSS។`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}


<div id="error-handling-and-debugging" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">8. ការគ្រប់គ្រងកំហុស និងការបំបាត់កំហុស</h2>
  <p className="mt-4 text-lg">
    ការគ្រប់គ្រងកំហុស និងការបំបាត់កំហុសគឺជាជំនាញសំខាន់សម្រាប់អ្នកអភិវឌ្ឍ JavaScript។ នៅក្នុងផ្នែកនេះ យើងនឹងស្វែងយល់ពីវិធីសាស្រ្ត console, ការបំបាត់កំហុសដោយប្រើ DevTools របស់កម្មវិធីរុករក និងការប្រើ `try...catch` និង `throw`។
  </p>

  {/* 8.1 Console Methods */}
  <div id="console-methods" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">8.1. វិធីសាស្រ្ត Console (console.log, console.error)</h3>
    <p className="mt-2">
      Console methods ដូចជា `console.log` និង `console.error` ត្រូវបានប្រើដើម្បីបង្ហាញព័ត៌មាននៅក្នុង console របស់កម្មវិធីរុករក។
    </p>
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Console Methods
console.log("This is a log message."); // បង្ហាញសារធម្មតា
console.error("This is an error message."); // បង្ហាញសារកំហុស`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`This is a log message.
This is an error message.`}
    </SyntaxHighlighter>
  </div>

  {/* 8.2 Debugging with DevTools */}
  <div id="debugging-with-devtools" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">8.2. ការបំបាត់កំហុសដោយប្រើ DevTools</h3>
    <p className="mt-2">
      DevTools របស់កម្មវិធីរុករកផ្តល់ឧបករណ៍សម្រាប់បំបាត់កំហុស ដូចជា breakpoints, step-through debugging, និងការតាមដានតម្លៃអថេរ។
    </p>
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Debugging with DevTools
function add(a, b) {
  debugger; // Pause execution here
  return a + b;
}

console.log(add(2, 3));`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
    {`នៅពេលដំណើរការ កូដនឹងផ្អាកនៅ \`debugger\` ហើយអ្នកអាចពិនិត្យតម្លៃអថេរនៅក្នុង DevTools។`}
    </SyntaxHighlighter>
  </div>

  {/* 8.3 try...catch and throw */}
  <div id="try-catch-and-throw" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">8.3. try...catch និង throw</h3>
    <p className="mt-2">
      `try...catch` អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងកំហុសដោយមិនធ្វើឱ្យកម្មវិធីរបស់អ្នកឈប់ដំណើរការ។ `throw` អនុញ្ញាតឱ្យអ្នកបង្កើតកំហុសផ្ទាល់ខ្លួន។
    </p>
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {`// ឧទាហរណ៍៖ try...catch និង throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message); // បង្ហាញសារកំហុស
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Cannot divide by zero!`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}

 <div id="working-with-files-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">8. Working with Files in PHP</h2>
  <p className="mt-4 text-lg">
    PHP ផ្តល់មុខងារជាច្រើនដើម្បីធ្វើការជាមួយឯកសារ ដូចជាការអាន ការសរសេរ ការផ្ទុកឡើង និងការគ្រប់គ្រងឯកសារនៅលើសឺវ័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រងឯកសារ ការផ្ទុកឡើងឯកសារ និងការធ្វើការជាមួយឯកសារប្រភេទ CSV និង JSON។
  </p>

  {/* 8.1 File Handling (Read/Write) */}
  <div id="file-handling-read-write" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">8.1. File Handling (Read/Write)</h3>
    <p className="mt-2">
      PHP អនុញ្ញាតឱ្យអ្នកអាន និងសរសេរទិន្នន័យទៅកាន់ឯកសារ។ អ្នកអាចប្រើមុខងារដូចជា `fopen`, `fread`, `fwrite`, និង `fclose` ដើម្បីធ្វើការជាមួយឯកសារ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការសរសេរទិន្នន័យទៅកាន់ឯកសារ
$file = fopen("example.txt", "w");
fwrite($file, "Hello, World!");
fclose($file);

// ឧទាហរណ៍៖ ការអានទិន្នន័យពីឯកសារ
$file = fopen("example.txt", "r");
echo fread($file, filesize("example.txt"));
fclose($file);`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Hello, World!`}
    </SyntaxHighlighter>
  </div>

  {/* 8.2 Uploading Files */}
  <div id="uploading-files" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">8.2. Uploading Files</h3>
    <p className="mt-2">
      PHP អនុញ្ញាតឱ្យអ្នកផ្ទុកឡើងឯកសារពីទម្រង់ HTML ទៅកាន់សឺវ័រ។ អ្នកអាចប្រើ Superglobal `$_FILES` ដើម្បីចូលប្រើឯកសារដែលបានផ្ទុកឡើង។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការផ្ទុកឡើងឯកសារ
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
  echo "File uploaded successfully.";
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`File uploaded successfully.`}
    </SyntaxHighlighter>
  </div>

  {/* 8.3 Handling CSV and JSON Files */}
  <div id="handling-csv-and-json-files" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">8.3. Handling CSV and JSON Files</h3>
    <p className="mt-2">
      PHP អនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយឯកសារប្រភេទ CSV និង JSON។ អ្នកអាចប្រើមុខងារដូចជា `fgetcsv` ដើម្បីអានឯកសារ CSV និង `json_encode` និង `json_decode` ដើម្បីធ្វើការជាមួយទិន្នន័យ JSON។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការអានឯកសារ CSV
$file = fopen("example.csv", "r");
while (($data = fgetcsv($file)) !== FALSE) {
  print_r($data);
}
fclose($file);

// ឧទាហរណ៍៖ ការធ្វើការជាមួយទិន្នន័យ JSON
$data = array("name" => "John", "age" => 25);
$json = json_encode($data);
echo $json;

$decoded = json_decode($json, true);
print_r($decoded);`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Array
(
    [0] => John
    [1] => 25
)
{"name":"John","age":25}
Array
(
    [name] => John
    [age] => 25
)`}
    </SyntaxHighlighter>
  </div>
</div>

<div id="object-oriented-programming-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">9. Object-Oriented Programming (OOP) in PHP</h2>
  <p className="mt-4 text-lg">
    ការសរសេរកម្មវិធីដោយប្រើប្រាស់វិធីសាស្ត្រប្រធានវត្ថុ (Object-Oriented Programming - OOP) គឺជាវិធីសាស្ត្រដ៏មានប្រសិទ្ធភាពក្នុងការរៀបចំកូដ។ PHP គាំទ្រវិធីសាស្ត្រនេះ ដោយផ្តល់លក្ខណៈពិសេសដូចជា Classes, Objects, Inheritance, Polymorphism, Interfaces, Abstract Classes, និង Traits។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីគោលគំនិតទាំងនេះ។
  </p>

  {/* 9.1 Classes and Objects */}
  <div id="classes-and-objects" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">9.1. Classes and Objects</h3>
    <p className="mt-2">
      Class គឺជាគំរូ (blueprint) សម្រាប់បង្កើត Objects។ Object គឺជាករណីជាក់លាក់នៃ Class។ នៅក្នុង PHP អ្នកអាចកំណត់ Class ដោយប្រើពាក្យគន្លឹះ `class` ហើយបង្កើត Object ដោយប្រើពាក្យគន្លឹះ `new`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Class និង Object
class Car {
  public $brand;
  public $model;

  public function displayInfo() {
    return "Brand: " . $this->brand . ", Model: " . $this->model;
  }
}

$myCar = new Car();
$myCar->brand = "Toyota";
$myCar->model = "Corolla";
echo $myCar->displayInfo();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Brand: Toyota, Model: Corolla`}
    </SyntaxHighlighter>
  </div>

  {/* 9.2 Constructors and Destructors */}
  <div id="constructors-and-destructors" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">9.2. Constructors and Destructors</h3>
    <p className="mt-2">
      Constructor គឺជាមុខងារពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេល Object ត្រូវបានបង្កើត។ Destructor គឺជាមុខងារពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេល Object ត្រូវបានបំផ្លាញ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Constructor និង Destructor
class Car {
  public $brand;
  public $model;

  public function __construct($brand, $model) {
    $this->brand = $brand;
    $this->model = $model;
    echo "Car object created.<br>";
  }

  public function __destruct() {
    echo "Car object destroyed.<br>";
  }

  public function displayInfo() {
    return "Brand: " . $this->brand . ", Model: " . $this->model;
  }
}

$myCar = new Car("Toyota", "Corolla");
echo $myCar->displayInfo();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Car object created.
Brand: Toyota, Model: Corolla
Car object destroyed.`}
    </SyntaxHighlighter>
  </div>

  {/* 9.3 Inheritance and Polymorphism */}
  <div id="inheritance-and-polymorphism" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">9.3. Inheritance and Polymorphism</h3>
    <p className="mt-2">
      Inheritance គឺជាលក្ខណៈពិសេសនៃ OOP ដែលអនុញ្ញាតឱ្យ Class មួយទទួលមរតកលក្ខណៈពិសេសពី Class ផ្សេង។ Polymorphism គឺជាលក្ខណៈពិសេសដែលអនុញ្ញាតឱ្យមានច្រើនទម្រង់នៃមុខងារដូចគ្នា។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Inheritance និង Polymorphism
class Vehicle {
  public function startEngine() {
    return "Engine started.<br>";
  }
}

class Car extends Vehicle {
  public function startEngine() {
    return "Car engine started.<br>";
  }
}

$vehicle = new Vehicle();
$car = new Car();
echo $vehicle->startEngine();
echo $car->startEngine();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Engine started.
Car engine started.`}
    </SyntaxHighlighter>
  </div>

  {/* 9.4 Interfaces and Abstract Classes */}
  <div id="interfaces-and-abstract-classes" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">9.4. Interfaces and Abstract Classes</h3>
    <p className="mt-2">
      Interface គឺជាការកំណត់រចនាសម្ព័ន្ធសម្រាប់ Class ដែលត្រូវតាម។ Abstract Class គឺជា Class ដែលមិនអាចបង្កើត Object ដោយផ្ទាល់ ហើយត្រូវតែត្រូវបានពង្រីកដោយ Class ផ្សេង។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Interface និង Abstract Class
interface Drivable {
  public function drive();
}

abstract class Vehicle {
  abstract public function startEngine();
}

class Car extends Vehicle implements Drivable {
  public function startEngine() {
    return "Car engine started.<br>";
  }

  public function drive() {
    return "Car is driving.<br>";
  }
}

$car = new Car();
echo $car->startEngine();
echo $car->drive();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Car engine started.
Car is driving.`}
    </SyntaxHighlighter>
  </div>

  {/* 9.5 Traits in PHP */}
  <div id="traits-in-php" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">9.5. Traits in PHP</h3>
    <p className="mt-2">
      Traits គឺជាវិធីសាស្ត្រដើម្បីចែករំលែកមុខងាររវាង Classes។ Traits អនុញ្ញាតឱ្យអ្នកប្រើមុខងារដូចគ្នានៅក្នុង Classes ច្រើនដោយមិនចាំបាច់ពង្រីក Class មួយ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Traits
trait Loggable {
  public function log($message) {
    echo "Log: " . $message . "<br>";
  }
}

class Car {
  use Loggable;

  public function startEngine() {
    $this->log("Car engine started.");
    return "Engine started.<br>";
  }
}

$car = new Car();
echo $car->startEngine();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Log: Car engine started.
Engine started.`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="php-and-mysql" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">10. PHP and MySQL</h2>
  <p className="mt-4 text-lg">
    PHP និង MySQL គឺជាបច្ចេកវិទ្យាដ៏ពេញនិយមសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីគេហទំព័រដែលមានការភ្ជាប់ទៅនឹងមូលដ្ឋានទិន្នន័យ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL ការអនុវត្តប្រតិបត្តិការ CRUD (Create, Read, Update, Delete) ការប្រើ Prepared Statements ដើម្បីការពារសុវត្ថិភាព និងការប្រើ PDO សម្រាប់ការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។
  </p>

  {/* 10.1 Connecting to a Database */}
  <div id="connecting-to-a-database" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">10.1. Connecting to a Database</h3>
    <p className="mt-2">
      ដើម្បីភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL អ្នកអាចប្រើមុខងារ `mysqli_connect` ឬ PDO។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// បង្កើតការភ្ជាប់
$conn = mysqli_connect($servername, $username, $password, $dbname);

// ពិនិត្យការភ្ជាប់
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Connected successfully`}
    </SyntaxHighlighter>
  </div>

  {/* 10.2 CRUD Operations (Create, Read, Update, Delete) */}
  <div id="crud-operations" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">10.2. CRUD Operations (Create, Read, Update, Delete)</h3>
    <p className="mt-2">
      CRUD គឺជាប្រតិបត្តិការមូលដ្ឋានដែលត្រូវបានប្រើក្នុងការគ្រប់គ្រងទិន្នន័យ។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃប្រតិបត្តិការ CRUD។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ CRUD Operations
// Create
$sql = "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')";
if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
}

// Read
$sql = "SELECT id, name, email FROM users";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
  echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
}

// Update
$sql = "UPDATE users SET email='john.doe@example.com' WHERE id=1";
if (mysqli_query($conn, $sql)) {
  echo "Record updated successfully";
}

// Delete
$sql = "DELETE FROM users WHERE id=1";
if (mysqli_query($conn, $sql)) {
  echo "Record deleted successfully";
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`New record created successfully
ID: 1 - Name: John Doe - Email: john@example.com
Record updated successfully
Record deleted successfully`}
    </SyntaxHighlighter>
  </div>

  {/* 10.3 Prepared Statements and Security */}
  <div id="prepared-statements-and-security" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">10.3. Prepared Statements and Security</h3>
    <p className="mt-2">
      Prepared Statements គឺជាវិធីសាស្ត្រដើម្បីការពារកម្មវិធីពីការវាយប្រហារដូចជា SQL Injection។ វាអនុញ្ញាតឱ្យអ្នកដាក់ប៉ារ៉ាម៉ែត្រទៅក្នុងសំណួរដោយសុវត្ថិភាព។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Prepared Statements
$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

// កំណត់តម្លៃប៉ារ៉ាម៉ែត្រ និងអនុវត្ត
$name = "Jane Doe";
$email = "jane@example.com";
$stmt->execute();

echo "New record created successfully";`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`New record created successfully`}
    </SyntaxHighlighter>
  </div>

  {/* 10.4 Using PDO for Database Interaction */}
  <div id="using-pdo-for-database-interaction" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">10.4. Using PDO for Database Interaction</h3>
    <p className="mt-2">
      PDO (PHP Data Objects) គឺជាវិធីសាស្ត្រដ៏មានប្រសិទ្ធភាពសម្រាប់ការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។ វាផ្តល់ភាពអាចផ្លាស់ប្តូរបានរវាងមូលដ្ឋានទិន្នន័យផ្សេងៗ និងគាំទ្រការប្រើ Prepared Statements។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការប្រើ PDO
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // ប្រើ Prepared Statements
  $stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':email', $email);

  // កំណត់តម្លៃប៉ារ៉ាម៉ែត្រ និងអនុវត្ត
  $name = "Alice";
  $email = "alice@example.com";
  $stmt->execute();

  echo "New record created successfully";
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`New record created successfully`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="sessions-and-cookies" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">11. Sessions and Cookies</h2>
  <p className="mt-4 text-lg">
    Sessions និង Cookies គឺជាវិធីសាស្ត្រសម្រាប់គ្រប់គ្រងស្ថានភាពរបស់អ្នកប្រើប្រាស់នៅលើគេហទំព័រ។ Sessions ត្រូវបានរក្សាទុកនៅលើសឺវ័រ ខណៈពេលដែល Cookies ត្រូវបានរក្សាទុកនៅលើកុំព្យូទ័រអ្នកប្រើប្រាស់។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រង Sessions និងការប្រើ Cookies សម្រាប់ការតាមដានអ្នកប្រើប្រាស់។
  </p>

  {/* 11.1 Managing Sessions */}
  <div id="managing-sessions" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">11.1. Managing Sessions</h3>
    <p className="mt-2">
      Sessions ត្រូវបានប្រើដើម្បីរក្សាទិន្នន័យរបស់អ្នកប្រើប្រាស់នៅលើសឺវ័រ ហើយអាចប្រើបាននៅទូទាំងទំព័រផ្សេងៗនៃគេហទំព័រ។ ដើម្បីប្រើ Sessions អ្នកត្រូវចាប់ផ្តើម Session ដោយប្រើមុខងារ `session_start()`។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការគ្រប់គ្រង Sessions
session_start();

// កំណត់តម្លៃ Session
$_SESSION['username'] = 'JohnDoe';

// ទាញយកតម្លៃ Session
echo "Username: " . $_SESSION['username'];

// លុប Session
session_unset();
session_destroy();`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Username: JohnDoe`}
    </SyntaxHighlighter>
  </div>

  {/* 11.2 Using Cookies for User Tracking */}
  <div id="using-cookies-for-user-tracking" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">11.2. Using Cookies for User Tracking</h3>
    <p className="mt-2">
      Cookies ត្រូវបានប្រើដើម្បីរក្សាទិន្នន័យរបស់អ្នកប្រើប្រាស់នៅលើកុំព្យូទ័ររបស់ពួកគេ។ Cookies អាចត្រូវបានប្រើដើម្បីតាមដានអ្នកប្រើប្រាស់ ឬរក្សាការកំណត់របស់ពួកគេ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការប្រើ Cookies
// កំណត់ Cookie
setcookie("username", "JohnDoe", time() + (86400 * 30), "/"); // 86400 = 1 day

// ទាញយកតម្លៃ Cookie
if (isset($_COOKIE['username'])) {
  echo "Username: " . $_COOKIE['username'];
} else {
  echo "Cookie not set.";
}

// លុប Cookie
setcookie("username", "", time() - 3600, "/");`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Username: JohnDoe`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="php-and-ajax" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">12. PHP and AJAX</h2>
  <p className="mt-4 text-lg">
    AJAX (Asynchronous JavaScript and XML) គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យអ្នកធ្វើការស្នើសុំទៅកាន់សឺវ័រដោយមិនចាំបាច់ផ្ទុកទំព័រឡើងវិញ។ PHP អាចត្រូវបានប្រើជាមួយ AJAX ដើម្បីធ្វើការស្នើសុំអសមកាល និងទទួលការឆ្លើយតបពីសឺវ័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រងសំណើអសមកាល និងការប្រើ Fetch API ជាមួយ PHP។
  </p>

  {/* 12.1 Handling Asynchronous Requests */}
  <div id="handling-asynchronous-requests" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">12.1. Handling Asynchronous Requests</h3>
    <p className="mt-2">
      AJAX អនុញ្ញាតឱ្យអ្នកធ្វើការស្នើសុំទៅកាន់សឺវ័រដោយមិនចាំបាច់ផ្ទុកទំព័រឡើងវិញ។ PHP អាចដំណើរការសំណើទាំងនេះ ហើយត្រឡប់ទិន្នន័យជាទម្រង់ JSON ឬ HTML។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការគ្រប់គ្រងសំណើអសមកាល
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $response = array("status" => "success", "message" => "Hello, " . $name);
  echo json_encode($response);
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`{"status":"success","message":"Hello, John"}`}
    </SyntaxHighlighter>
  </div>

  {/* 12.2 Fetch API and PHP */}
  <div id="fetch-api-and-php" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">12.2. Fetch API and PHP</h3>
    <p className="mt-2">
      Fetch API គឺជាវិធីសាស្ត្រទំនើបសម្រាប់ធ្វើការស្នើសុំ HTTP ពី JavaScript។ វាអាចត្រូវបានប្រើជាមួយ PHP ដើម្បីទទួល និងដំណើរការទិន្នន័យពីសឺវ័រ។
    </p>
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការប្រើ Fetch API ជាមួយ PHP
fetch('server.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John' })
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`{"status":"success","message":"Hello, John"}`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="php-security" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">13. PHP Security</h2>
  <p className="mt-4 text-lg">
    សុវត្ថិភាពគឺជាផ្នែកមួយដ៏សំខាន់នៃការអភិវឌ្ឍន៍កម្មវិធី។ PHP ផ្តល់ឧបករណ៍និងវិធីសាស្ត្រជាច្រើនដើម្បីការពារកម្មវិធីពីការវាយប្រហារផ្សេងៗ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការធ្វើសុពលភាពនិងសម្អាតទិន្នន័យ ការការពារការវាយប្រហារ SQL Injection ការការពារការវាយប្រហារ Cross-Site Scripting (XSS) និងការគ្រប់គ្រងពាក្យសម្ងាត់ដោយសុវត្ថិភាព។
  </p>

  {/* 13.1 Input Validation and Sanitization */}
  <div id="input-validation-and-sanitization" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">13.1. Input Validation and Sanitization</h3>
    <p className="mt-2">
      ការធ្វើសុពលភាពនិងសម្អាតទិន្នន័យគឺជាដំណើរការនៃការធានាថាទិន្នន័យដែលបានបញ្ចូលដោយអ្នកប្រើប្រាស់គឺត្រឹមត្រូវ និងសុវត្ថិភាព។ PHP ផ្តល់មុខងារដូចជា `filter_var` និង `htmlspecialchars` សម្រាប់ការសម្អាតទិន្នន័យ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការធ្វើសុពលភាពនិងសម្អាតទិន្នន័យ
$email = "john@example.com";

// ធ្វើសុពលភាពអ៊ីមែល
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Email is valid.";
} else {
  echo "Invalid email format.";
}

// សម្អាតទិន្នន័យ
$input = "<script>alert('XSS');</script>";
$cleanInput = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
echo $cleanInput;`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Email is valid.
&lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;`}
    </SyntaxHighlighter>
  </div>

  {/* 13.2 Protecting Against SQL Injection */}
  <div id="protecting-against-sql-injection" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">13.2. Protecting Against SQL Injection</h3>
    <p className="mt-2">
      SQL Injection គឺជាការវាយប្រហារដែលអាចឱ្យអ្នកវាយប្រហារបញ្ចូលសំណើ SQL មិនសុវត្ថិភាពទៅក្នុងមូលដ្ឋានទិន្នន័យ។ ដើម្បីការពារការវាយប្រហារនេះ អ្នកគួរតែប្រើ Prepared Statements។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការការពារការវាយប្រហារ SQL Injection
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);

$email = "john@example.com";
$stmt->execute();
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
  echo "Name: " . $row['name'];
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Name: John Doe`}
    </SyntaxHighlighter>
  </div>

  {/* 13.3 Preventing Cross-Site Scripting (XSS) */}
  <div id="preventing-cross-site-scripting-xss" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">13.3. Preventing Cross-Site Scripting (XSS)</h3>
    <p className="mt-2">
      Cross-Site Scripting (XSS) គឺជាការវាយប្រហារដែលអាចឱ្យអ្នកវាយប្រហារបញ្ចូលស្គ្រីបមិនសុវត្ថិភាពទៅក្នុងទំព័រ។ ដើម្បីការពារការវាយប្រហារនេះ អ្នកគួរតែប្រើមុខងារដូចជា `htmlspecialchars` ដើម្បីសម្អាតទិន្នន័យ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការការពារ XSS
$input = "<script>alert('XSS');</script>";
$cleanInput = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
echo $cleanInput;`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`&lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;`}
    </SyntaxHighlighter>
  </div>

  {/* 13.4 Password Hashing and Authentication */}
  <div id="password-hashing-and-authentication" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">13.4. Password Hashing and Authentication</h3>
    <p className="mt-2">
      ការគ្រប់គ្រងពាក្យសម្ងាត់ដោយសុវត្ថិភាពគឺជាផ្នែកមួយដ៏សំខាន់នៃការអភិវឌ្ឍន៍កម្មវិធី។ PHP ផ្តល់មុខងារដូចជា `password_hash` និង `password_verify` ដើម្បីគ្រប់គ្រងពាក្យសម្ងាត់ដោយសុវត្ថិភាព។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការគ្រប់គ្រងពាក្យសម្ងាត់
$password = "myPassword123";

// បង្កើត hash សម្រាប់ពាក្យសម្ងាត់
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
echo "Hashed Password: " . $hashedPassword;

// ផ្ទៀងផ្ទាត់ពាក្យសម្ងាត់
if (password_verify($password, $hashedPassword)) {
  echo "Password is valid!";
} else {
  echo "Invalid password!";
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Hashed Password: $2y$10$examplehash
Password is valid!`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="working-with-apis-in-php" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">14. Working with APIs in PHP</h2>
  <p className="mt-4 text-lg">
    APIs (Application Programming Interfaces) គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យកម្មវិធីផ្សេងៗទំនាក់ទំនងជាមួយគ្នា។ PHP អាចត្រូវបានប្រើដើម្បីទទួលទិន្នន័យពី REST APIs ឬបង្កើត RESTful APIs ផ្ទាល់ខ្លួន។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការប្រើ REST APIs និងការបង្កើត RESTful APIs ជាមួយ PHP។
  </p>

  {/* 14.1 Consuming REST APIs */}
  <div id="consuming-rest-apis" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">14.1. Consuming REST APIs</h3>
    <p className="mt-2">
      PHP អាចត្រូវបានប្រើដើម្បីទទួលទិន្នន័យពី REST APIs ដោយប្រើមុខងារដូចជា `file_get_contents` ឬ `cURL`។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃការទទួលទិន្នន័យពី REST API។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការទទួលទិន្នន័យពី REST API
$url = "https://api.example.com/data";
$response = file_get_contents($url);
$data = json_decode($response, true);

print_r($data);`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Array
(
    [id] => 1
    [name] => John Doe
    [email] => john@example.com
)`}
    </SyntaxHighlighter>
  </div>

  {/* 14.2 Creating RESTful APIs with PHP */}
  <div id="creating-restful-apis-with-php" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">14.2. Creating RESTful APIs with PHP</h3>
    <p className="mt-2">
      PHP អាចត្រូវបានប្រើដើម្បីបង្កើត RESTful APIs ដែលអនុញ្ញាតឱ្យកម្មវិធីផ្សេងៗទទួលទិន្នន័យពីសឺវ័ររបស់អ្នក។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃការបង្កើត RESTful API សាមញ្ញ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ ការបង្កើត RESTful API
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", trim($_SERVER['PATH_INFO'], '/'));

switch ($method) {
  case 'GET':
    // ទទួលទិន្នន័យ
    echo json_encode(array("message" => "GET request received"));
    break;
  case 'POST':
    // បង្កើតទិន្នន័យ
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(array("message" => "POST request received", "data" => $data));
    break;
  default:
    // ការស្នើសុំមិនត្រឹមត្រូវ
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed"));
    break;
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`{"message":"GET request received"}`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 <div id="php-frameworks" className="py-12 px-6 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-blue-600">15. PHP Frameworks</h2>
  <p className="mt-4 text-lg">
    PHP Frameworks គឺជាឧបករណ៍ដែលផ្តល់នូវរចនាសម្ព័ន្ធ និងមុខងារសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីយ៉ាងមានប្រសិទ្ធភាព។ ក្នុងចំណោម PHP Frameworks ដែលពេញនិយមបំផុតគឺ Laravel។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពី Laravel ដែលរួមមានការណែនាំអំពី Laravel, Routing និង Controllers, Blade Templates, និង Eloquent ORM។
  </p>

  {/* 15.1 Introduction to Laravel */}
  <div id="introduction-to-laravel" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">15.1. Introduction to Laravel</h3>
    <p className="mt-2">
      Laravel គឺជា PHP Framework ដ៏ពេញនិយមមួយដែលផ្តល់នូវរចនាសម្ព័ន្ធសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីយ៉ាងមានប្រសិទ្ធភាព។ វាមានមុខងារជាច្រើនដូចជា Routing, Controllers, Blade Templates, និង Eloquent ORM។
    </p>
    <SyntaxHighlighter language="bash" style={a11yDark}>
      {`# ការដំឡើង Laravel
composer create-project --prefer-dist laravel/laravel blog`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Laravel project created successfully.`}
    </SyntaxHighlighter>
  </div>

  {/* 15.2 Routing and Controllers */}
  <div id="routing-and-controllers" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">15.2. Routing and Controllers</h3>
    <p className="mt-2">
      Routing គឺជាវិធីសាស្ត្រដើម្បីកំណត់ពីរបៀបដែលកម្មវិធីឆ្លើយតបទៅនឹងសំណើ HTTP។ Controllers គឺជាផ្នែកមួយដែលគ្រប់គ្រងឡូជីខលនៃកម្មវិធី។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Routing និង Controllers
// កំណត់ Route
Route::get('/user', [UserController::class, 'index']);

// UserController
class UserController extends Controller
{
    public function index()
    {
        return "Hello, User!";
    }
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`Hello, User!`}
    </SyntaxHighlighter>
  </div>

  {/* 15.3 Blade Templates */}
  <div id="blade-templates" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">15.3. Blade Templates</h3>
    <p className="mt-2">
      Blade គឺជាប្រព័ន្ធគំរូ (template engine) របស់ Laravel ដែលផ្តល់នូវភាពងាយស្រួលក្នុងការបង្កើតទំព័រ HTML។ Blade អនុញ្ញាតឱ្យអ្នកប្រើ syntax ដ៏សាមញ្ញ និងមានថាមពល។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Blade Template
// resources/views/welcome.blade.php
<html>
<body>
    <h1>Hello, {{ $name }}</h1>
</body>
</html>

// Route
Route::get('/welcome', function () {
    return view('welcome', ['name' => 'John Doe']);
});`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`<html>
<body>
    <h1>Hello, John Doe</h1>
</body>
</html>`}
    </SyntaxHighlighter>
  </div>

  {/* 15.4 Eloquent ORM */}
  <div id="eloquent-orm" className="mt-8">
    <h3 className="text-2xl font-semibold text-blue-600">15.4. Eloquent ORM</h3>
    <p className="mt-2">
      Eloquent ORM គឺជាប្រព័ន្ធគ្រប់គ្រងទិន្នន័យរបស់ Laravel ដែលផ្តល់នូវវិធីសាស្ត្រដ៏សាមញ្ញ និងមានថាមពលសម្រាប់ការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។
    </p>
    <SyntaxHighlighter language="php" style={a11yDark}>
      {`// ឧទាហរណ៍៖ Eloquent ORM
// កំណត់ Model
class User extends Model
{
    protected $table = 'users';
}

// ទាញយកទិន្នន័យពីមូលដ្ឋានទិន្នន័យ
$users = User::all();
foreach ($users as $user) {
    echo $user->name;
}`}
    </SyntaxHighlighter>
    <p className="mt-2"><strong>លទ្ធផល៖</strong></p>
    <SyntaxHighlighter language="plaintext" style={a11yDark}>
      {`John Doe
Jane Doe`}
    </SyntaxHighlighter>
  </div>
</div>
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}
 {/* -------------------------Maincontent-------------------------------- */}



      </div>
        
      <div className="max-w-2xl mx-auto w-full sm:w-3/4 md:w-2/4 lg:w-2/4 p-6 shadow-md hidden sm:block">
  <h2 className="text-xl font-bold mb-2 text-yellow-500">សរសេរកូដ JavaScript</h2>

  

  {/* JavaScript Code Editor */}
  <div className="relative">
    {/* Syntax Highlighter */}
    {open && (
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        className="absolute top-0 left-0 w-full h-full p-3 overflow-auto rounded-lg z-10"
      >
        {code}
      </SyntaxHighlighter>
    )}

    {/* Textarea for Code Editing */}
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      className="w-full h-40 p-3 bg-black text-white border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring focus:border-blue-400 z-0"
    ></textarea>
  </div>

  {/* Live JavaScript Output */}
  <h3 className="text-lg font-semibold mt-4 text-red-500">លទ្ធផលដែលទទួលបាន៖</h3>
  <pre className="w-full h-40 p-3 bg-black text-white border border-gray-300 rounded-lg font-mono text-sm overflow-auto">
    {output}
  </pre>
</div>


  </div>
  


    </>
  );
}

export default Javascript;