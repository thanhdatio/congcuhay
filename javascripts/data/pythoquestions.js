const list = [
    {
        "question": "What is the output of the following code?",
        "code": "my_list = [1, 2, 3, 4]\nprint(my_list[10:])",
        "answers": [
            { "text": "An empty list", "correct": true },
            { "text": "An index out of range error" },
            { "text": "[4]" },
            { "text": "[1, 2, 3, 4]" }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "x = 5\nprint(x == 4 or 5)",
        "answers": [
            { "text": "True" },
            { "text": "False", "correct": true },
            { "text": "5" },
            { "text": "None" }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "my_dict = {1: 'one', 2: 'two', 3: 'three'}\nprint(my_dict.get(4, 'four'))",
        "answers": [
            { "text": "'four'", "correct": true },
            { "text": "'None'" },
            { "text": "4" },
            { "text": "'KeyError'" }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)",
        "answers": [
            { "text": "[1, 2, 3, 4]", "correct": true },
            { "text": "[1, 2, 3]" },
            { "text": "[4, 3, 2, 1]" },
            { "text": "[4, 3, 2]" }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "x = ['a', 'b', 'c']\nfor i in x:\n  if i == 'a':\n    x.remove(i)\nprint(x)",
        "answers": [
            { "text": "['b', 'c']" },
            { "text": "['a', 'b', 'c']" },
            { "text": "['b', 'c']", "correct": true },
            { "text": "An error" }
        ]
    },
    {
        "question": "What is Python?",
        "answers": [
            { "text": "A high-level programming language", "correct": true },
            { "text": "A markup language" },
            { "text": "A low-level programming language" },
            { "text": "A scripting language" }
        ]
    },
    {
        "question": "What is the difference between Python 2 and Python 3?",
        "answers": [
            { "text": "Python 2 is no longer supported by the Python community", "correct": true },
            { "text": "Python 3 is no longer supported by the Python community" },
            { "text": "Python 2 has more features than Python 3" },
            { "text": "Python 3 is faster than Python 2" }
        ]
    },
    {
        "question": "What is PEP 8?",
        "answers": [
            { "text": "A style guide for Python code", "correct": true },
            { "text": "A Python package manager" },
            { "text": "A Python web framework" },
            { "text": "A Python virtual environment manager" }
        ]
    },
    {
        "question": "What is a virtual environment in Python?",
        "answers": [
            { "text": "A self-contained directory that contains a Python installation and all required libraries for a specific project", "correct": true },
            { "text": "A Python package manager" },
            { "text": "A Python web framework" },
            { "text": "A tool for code profiling and optimization" }
        ]
    },
    {
        "question": "What is a decorator in Python?",
        "answers": [
            { "text": "A special type of function that modifies the behavior of another function", "correct": true },
            { "text": "A tool for code profiling and optimization" },
            { "text": "A Python package manager" },
            { "text": "A Python web framework" }
        ]
    },
    {
        "question": "What is the difference between a tuple and a list in Python?",
        "answers": [
            { "text": "A tuple is immutable, while a list is mutable.", "correct": true },
            { "text": "A list is immutable, while a tuple is mutable." },
            { "text": "Both a tuple and a list are immutable." },
            { "text": "Both a tuple and a list are mutable." }
        ]
    },
    {
        "question": "What is a lambda function in Python?",
        "answers": [
            { "text": "A function that takes in another function as an argument." },
            { "text": "A function that can be defined in a single line of code.", "correct": true },
            { "text": "A function that is used to generate random numbers." },
            { "text": "A function that is used to sort data in Python." }
        ]
    },
    {
        "question": "What is the purpose of the 'yield' keyword in Python?",
        "answers": [
            { "text": "To return a value from a function." },
            { "text": "To create a new object in Python." },
            { "text": "To define a new variable in Python." },
            { "text": "To create a generator function that returns a sequence of values.", "correct": true }
        ]
    },
    {
        "question": "What is the difference between 'is' and '==' in Python?",
        "answers": [
            { "text": "'is' is used for object identity comparison, while '==' is used for value comparison.", "correct": true },
            { "text": "'==' is used for object identity comparison, while 'is' is used for value comparison." },
            { "text": "'is' and '==' are used interchangeably in Python." },
            { "text": "There is no difference between 'is' and '==' in Python." }
        ]
    },
    {
        "question": "What is the purpose of the 'try' and 'except' keywords in Python?",
        "answers": [
            { "text": "To create a new function in Python." },
            { "text": "To test the performance of a Python program." },
            { "text": "To handle exceptions in Python.", "correct": true },
            { "text": "To define a new class in Python." }
        ]
    },
    {
        "question": "What is horizontal scaling in Python?",
        "answers": [
            { "text": "Increasing the number of machines running Python to handle more load", "correct": true },
            { "text": "Increasing the size of the machine running Python to handle more load" },
            { "text": "Optimizing the Python code to handle more load" },
            { "text": "Caching data to reduce the load on Python" }
        ]
    },
    {
        "question": "What is vertical scaling in Python?",
        "answers": [
            { "text": "Increasing the size of the machine running Python to handle more load", "correct": true },
            { "text": "Increasing the number of machines running Python to handle more load" },
            { "text": "Optimizing the Python code to handle more load" },
            { "text": "Caching data to reduce the load on Python" }
        ]
    },
    {
        "question": "What is load balancing in Python?",
        "answers": [
            { "text": "Distributing requests across multiple machines running Python to improve performance and availability", "correct": true },
            { "text": "Optimizing the Python code to handle more load" },
            { "text": "Caching data to reduce the load on Python" },
            { "text": "Increasing the number of machines running Python to handle more load" }
        ]
    },
    {
        "question": "What is sharding in Python?",
        "answers": [
            { "text": "Partitioning data across multiple machines running Python to improve performance and scalability", "correct": true },
            { "text": "Optimizing the Python code to handle more load" },
            { "text": "Caching data to reduce the load on Python" },
            { "text": "Increasing the number of machines running Python to handle more load" }
        ]
    },
    {
        "question": "What is caching in Python?",
        "answers": [
            { "text": "Storing frequently accessed data in memory to improve performance", "correct": true },
            { "text": "Distributing requests across multiple machines running Python to improve performance and availability" },
            { "text": "Partitioning data across multiple machines running Python to improve performance and scalability" },
            { "text": "Optimizing the Python code to handle more load" }
        ]
    },
    {
        "question": "What is concurrency in Python?",
        "answers": [
            { "text": "The ability to run multiple tasks simultaneously within a single Python process", "correct": true },
            { "text": "The ability to run multiple Python processes simultaneously on a single machine" },
            { "text": "The ability to run Python code on multiple machines simultaneously" },
            { "text": "The ability to optimize Python code for performance" }
        ]
    },
    {
        "question": "What is the Global Interpreter Lock (GIL) in Python?",
        "answers": [
            { "text": "A mechanism in CPython that prevents multiple threads from executing Python bytecodes at once", "correct": true },
            { "text": "A mechanism in CPython that allows multiple threads to execute Python bytecodes at once" },
            { "text": "A mechanism in CPython that allows multiple processes to execute Python bytecodes at once" },
            { "text": "A mechanism in CPython that allows Python code to be executed in parallel across multiple machines" }
        ]
    },
    {
        "question": "What is a thread in Python?",
        "answers": [
            { "text": "A lightweight execution unit within a Python process that can run concurrently with other threads", "correct": true },
            { "text": "A heavyweight execution unit within a Python process that can run concurrently with other threads" },
            { "text": "A separate Python process that can run concurrently with other processes" },
            { "text": "A mechanism for distributing Python code across multiple machines" }
        ]
    },
    {
        "question": "What is the difference between a thread and a process in Python?",
        "answers": [
            { "text": "A process is a separate execution environment with its own memory space, while a thread is a lightweight execution unit within a process that shares its memory space with other threads", "correct": true },
            { "text": "A thread is a separate execution environment with its own memory space, while a process is a lightweight execution unit within a process that shares its memory space with other processes" },
            { "text": "A process and a thread are the same thing in Python" },
            { "text": "A process and a thread are both mechanisms for distributing Python code across multiple machines" }
        ]
    },
    {
        "question": "What is the purpose of a lock in Python concurrency?",
        "answers": [
            { "text": "To prevent multiple threads from accessing shared resources simultaneously", "correct": true },
            { "text": "To allow multiple threads to access shared resources simultaneously" },
            { "text": "To prevent multiple processes from accessing shared resources simultaneously" },
            { "text": "To allow multiple processes to access shared resources simultaneously" }
        ]
    },
    {
        "question": "What is pip in Python?",
        "answers": [
            { "text": "A package manager for Python", "correct": true },
            { "text": "A Python module for running shell commands" },
            { "text": "A Python module for creating virtual environments" },
            { "text": "A Python module for creating standalone executables" }
        ]
    },
    {
        "question": "What is a virtual environment in Python?",
        "answers": [
            { "text": "An isolated Python environment with its own installed packages and dependencies", "correct": true },
            { "text": "A Python environment that is shared by multiple applications" },
            { "text": "A Python environment that is automatically created by the operating system" },
            { "text": "A Python environment that is optimized for performance" }
        ]
    },
    {
        "question": "How do you create a virtual environment in Python?",
        "answers": [
            { "text": "Using the venv module", "correct": true },
            { "text": "Using the virtualenv module" },
            { "text": "Using the pipenv module" },
            { "text": "Using the conda module" }
        ]
    },
    {
        "question": "What is a requirements.txt file in Python?",
        "answers": [
            { "text": "A file that lists the packages and their versions required for a Python project", "correct": true },
            { "text": "A file that lists the commands required to run a Python project" },
            { "text": "A file that lists the environment variables required for a Python project" },
            { "text": "A file that lists the configuration options required for a Python project" }
        ]
    },
    {
        "question": "What is a setup.py file in Python?",
        "answers": [
            { "text": "A file that defines the metadata and dependencies required for a Python package", "correct": true },
            { "text": "A file that defines the tests and benchmarks for a Python package" },
            { "text": "A file that defines the command-line interface for a Python package" },
            { "text": "A file that defines the user interface for a Python package" }
        ]
    },
    {
        "question": "What is an exception in Python?",
        "answers": [
            { "text": "An error that occurs during the execution of a Python program", "correct": true },
            { "text": "A syntax error in a Python program" },
            { "text": "A warning that is raised during the execution of a Python program" },
            { "text": "A message that is printed during the execution of a Python program" }
        ]
    },
    {
        "question": "What is the purpose of try-except blocks in Python?",
        "answers": [
            { "text": "To handle exceptions and prevent a program from crashing", "correct": true },
            { "text": "To define custom exceptions in a Python program" },
            { "text": "To raise exceptions and terminate a Python program" },
            { "text": "To debug a Python program" }
        ]
    },
    {
        "question": "What is the syntax for a try-except block in Python?",
        "answers": [
            { "text": "try:\n  # code to be executed\nexcept Exception as e:\n  # code to handle the exception", "correct": true },
            { "text": "try:\n  # code to handle the exception\nexcept Exception as e:\n  # code to be executed" },
            { "text": "try:\n  # code to be executed\nexcept:\n  # code to handle the exception" },
            { "text": "try:\n  # code to handle the exception\nexcept:\n  # code to be executed" }
        ]
    },
    {
        "question": "What is the purpose of the else block in a try-except-else statement?",
        "answers": [
            { "text": "To execute code when no exceptions are raised in the try block", "correct": true },
            { "text": "To execute code when an exception is raised in the try block" },
            { "text": "To execute code when an exception is raised in the except block" },
            { "text": "To execute code when an exception is raised in the finally block" }
        ]
    },
    {
        "question": "What is the purpose of the finally block in a try-except-finally statement?",
        "answers": [
            { "text": "To execute code whether or not an exception is raised in the try block", "correct": true },
            { "text": "To execute code when an exception is raised in the try block" },
            { "text": "To execute code when an exception is raised in the except block" },
            { "text": "To execute code when the program terminates" }
        ]
    },
    {
        "question": "What is a web framework in Python?",
        "answers": [
            { "text": "A tool that provides a standard way to build and deploy web applications in Python", "correct": true },
            { "text": "A library that allows Python to communicate with web servers" },
            { "text": "A software package that provides web hosting for Python applications" },
            { "text": "A programming language used for building web applications" }
        ]
    },
    {
        "question": "What are some popular Python web frameworks?",
        "answers": [
            { "text": "Django, Flask, Pyramid, Bottle, Tornado, CherryPy", "correct": true },
            { "text": "NumPy, SciPy, Pandas, Matplotlib, Seaborn" },
            { "text": "Tkinter, Pygame, PyOpenGL, Kivy, PyGTK" },
            { "text": "Requests, BeautifulSoup, Scrapy, Selenium, PyQuery" }
        ]
    },
    {
        "question": "What is the purpose of the Flask framework in Python?",
        "answers": [
            { "text": "To build lightweight web applications and APIs in Python", "correct": true },
            { "text": "To build complex web applications and content management systems in Python" },
            { "text": "To build web scraping and data mining tools in Python" },
            { "text": "To build machine learning and artificial intelligence applications in Python" }
        ]
    },
    {
        "question": "What is a template engine in Python web development?",
        "answers": [
            { "text": "A tool that allows you to separate the presentation layer from the business logic in a web application", "correct": true },
            { "text": "A tool that allows you to interact with databases in a web application" },
            { "text": "A tool that allows you to handle user authentication and authorization in a web application" },
            { "text": "A tool that allows you to build APIs and handle HTTP requests in a web application" }
        ]
    },
    {
        "question": "What is the purpose of the WSGI specification in Python web development?",
        "answers": [
            { "text": "To define a standard interface between web servers and web applications written in Python", "correct": true },
            { "text": "To define a standard interface between databases and web applications written in Python" },
            { "text": "To define a standard interface between template engines and web applications written in Python" },
            { "text": "To define a standard interface between web browsers and web applications written in Python" }
        ]
    },
    {
        "question": "What is a common type of vulnerability in Python web applications?",
        "answers": [
            { "text": "Injection attacks, such as SQL injection and command injection", "correct": true },
            { "text": "Cross-site scripting (XSS) attacks" },
            { "text": "Cross-site request forgery (CSRF) attacks" },
            { "text": "Denial-of-service (DoS) attacks" }
        ]
    },
    {
        "question": "What is a good practice for securing passwords in Python?",
        "answers": [
            { "text": "Hash passwords using a strong hashing algorithm, such as bcrypt or scrypt", "correct": true },
            { "text": "Store passwords in plaintext in the database" },
            { "text": "Encrypt passwords using a symmetric encryption algorithm, such as AES" },
            { "text": "Use a third-party authentication service, such as OAuth or OpenID" }
        ]
    },
    {
        "question": "What is a common way to protect against injection attacks in Python?",
        "answers": [
            { "text": "Use parameterized queries when interacting with databases", "correct": true },
            { "text": "Use a firewall to block incoming traffic from known attackers" },
            { "text": "Use HTTPS to encrypt traffic between the web server and the client" },
            { "text": "Use a web application firewall (WAF) to filter malicious traffic" }
        ]
    },
    {
        "question": "What is a good practice for handling user input in Python?",
        "answers": [
            { "text": "Validate and sanitize user input before using it in the application", "correct": true },
            { "text": "Assume all user input is safe and trustworthy" },
            { "text": "Use client-side validation to prevent malicious input from being submitted" },
            { "text": "Store user input in a separate database to prevent it from affecting other data" }
        ]
    },
    {
        "question": "What is a common way to protect against cross-site scripting (XSS) attacks in Python?",
        "answers": [
            { "text": "Escape or encode user input when displaying it in HTML or JavaScript", "correct": true },
            { "text": "Block incoming traffic from known malicious IPs" },
            { "text": "Use a web application firewall (WAF) to filter malicious traffic" },
            { "text": "Use HTTPS to encrypt traffic between the web server and the client" }
        ]
    },
    {
        "question": "What is the purpose of the math module in Python?",
        "answers": [
            { "text": "To provide mathematical functions and constants", "correct": true },
            { "text": "To manipulate strings and text" },
            { "text": "To work with binary data and file I/O" },
            { "text": "To handle date and time values" }
        ]
    },
    {
        "question": "What is the purpose of the random module in Python?",
        "answers": [
            { "text": "To generate random numbers and samples from probability distributions", "correct": true },
            { "text": "To work with dates and times" },
            { "text": "To manipulate strings and text" },
            { "text": "To interact with the file system and file I/O" }
        ]
    },
    {
        "question": "What is the purpose of the collections module in Python?",
        "answers": [
            { "text": "To provide additional data structures beyond the built-in types", "correct": true },
            { "text": "To work with dates and times" },
            { "text": "To manipulate strings and text" },
            { "text": "To interact with the file system and file I/O" }
        ]
    },
    {
        "question": "What is the purpose of the os module in Python?",
        "answers": [
            { "text": "To interact with the operating system and file system", "correct": true },
            { "text": "To work with dates and times" },
            { "text": "To manipulate strings and text" },
            { "text": "To generate random numbers and samples from probability distributions" }
        ]
    },
    {
        "question": "What is the purpose of the re module in Python?",
        "answers": [
            { "text": "To work with regular expressions for pattern matching and text manipulation", "correct": true },
            { "text": "To work with dates and times" },
            { "text": "To interact with the file system and file I/O" },
            { "text": "To generate random numbers and samples from probability distributions" }
        ]
    }
];
