const list = [
    {
        "question": "What is a thread in Java?",
        "answers": [
            {
                "text": "A thread is a lightweight sub-process that executes a set of instructions independently of other threads in the same program.",
                "correct": true
            },
            {
                "text": "A thread is a heavy-weight sub-process that executes a set of instructions independently of other threads in the same program."
            },
            {
                "text": "A thread is a process that runs in the background of a Java program."
            },
            {
                "text": "A thread is a Java class that is used to handle I/O operations."
            }
        ]
    },
    {
        "question": "What is the difference between a process and a thread?",
        "answers": [
            {
                "text": "A process is a program in execution, while a thread is a subset of a process that can execute independently.",
                "correct": true
            },
            {
                "text": "A process is a subset of a thread that can execute independently, while a thread is a program in execution."
            },
            {
                "text": "A process and a thread are the same thing in Java."
            },
            {
                "text": "A process and a thread can be used interchangeably in Java."
            }
        ]
    },
    {
        "question": "What is a synchronized block in Java?",
        "answers": [
            {
                "text": "A synchronized block is a block of code that is executed by only one thread at a time, while other threads are blocked until the current thread releases the lock.",
                "correct": true
            },
            {
                "text": "A synchronized block is a block of code that is executed by multiple threads simultaneously."
            },
            {
                "text": "A synchronized block is a block of code that is executed only by the main thread."
            },
            {
                "text": "A synchronized block is a block of code that is executed only by daemon threads."
            }
        ]
    },
    {
        "question": "What is a deadlock in Java?",
        "answers": [
            {
                "text": "A deadlock is a situation in which two or more threads are blocked and waiting for each other to release resources that they need to continue executing.",
                "correct": true
            },
            {
                "text": "A deadlock is a situation in which a single thread is blocked and waiting for other threads to release resources that it needs to continue executing."
            },
            {
                "text": "A deadlock is a situation in which a single thread is blocked and waiting for the main thread to release resources that it needs to continue executing."
            },
            {
                "text": "A deadlock is a situation in which a single thread is blocked and waiting for daemon threads to release resources that it needs to continue executing."
            }
        ]
    },
    {
        "question": "What is a race condition in Java?",
        "answers": [
            {
                "text": "A race condition is a situation in which the output of a program depends on the timing and sequence of events in the program.",
                "correct": true
            },
            {
                "text": "A race condition is a situation in which a program executes slower than expected."
            },
            {
                "text": "A race condition is a situation in which a program executes faster than expected."
            },
            {
                "text": "A race condition is a situation in which a program does not terminate."
            }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "int x = 5;\nSystem.out.println(++x);",
        "answers": [
            {
                "text": "5"
            },
            {
                "text": "6",
                "correct": true
            },
            {
                "text": "Compilation error"
            },
            {
                "text": "Runtime error"
            }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "public class Main {\n   public static void main(String[] args) {\n      int i = 0;\n      do {\n         i++;\n      } while (i < 5);\n      System.out.println(i);\n   }\n}",
        "answers": [
            {
                "text": "4"
            },
            {
                "text": "5",
                "correct": true
            },
            {
                "text": "6"
            },
            {
                "text": "Infinite loop"
            }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "public class Main {\n   public static void main(String[] args) {\n      String str1 = \"Hello\";\n      String str2 = \"Hello\";\n      System.out.println(str1 == str2);\n   }\n}",
        "answers": [
            {
                "text": "true",
                "correct": true
            },
            {
                "text": "false"
            },
            {
                "text": "Compilation error"
            },
            {
                "text": "Runtime error"
            }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "public class Main {\n   public static void main(String[] args) {\n      int[] arr = {1, 2, 3, 4, 5};\n      for (int i = 0; i <= arr.length; i++) {\n         System.out.println(arr[i]);\n      }\n   }\n}",
        "answers": [
            {
                "text": "1, 2, 3, 4, 5",
                "correct": true
            },
            {
                "text": "1, 2, 3, 4, 5, null"
            },
            {
                "text": "ArrayIndexOutOfBoundsException"
            },
            {
                "text": "Compilation error"
            }
        ]
    },
    {
        "question": "What is the output of the following code?",
        "code": "public class Main {\n   public static void main(String[] args) {\n      for (int i = 0; i < 5; i++) {\n         System.out.println(i);\n         i++;\n      }\n   }\n}",
        "answers": [
            {
                "text": "0, 1, 2, 3, 4",
                "correct": true
            },
            {
                "text": "0, 2, 4"
            },
            {
                "text": "1, 3, 5"
            },
            {
                "text": "Compilation error"
            }
        ]
    },
    {
        "question": "What is the difference between a constructor and a method in Java?",
        "answers": [
            {
                "text": "A constructor is used to initialize an object and is called when an object is created, while a method is used to perform an action on an object.",
                "correct": true
            },
            {
                "text": "A constructor is used to perform an action on an object and is called when an object is created, while a method is used to initialize an object."
            },
            {
                "text": "A constructor and a method are the same thing in Java."
            },
            {
                "text": "A constructor and a method can be used interchangeably in Java."
            }
        ]
    },
    {
        "question": "What is the difference between an abstract class and an interface in Java?",
        "answers": [
            {
                "text": "An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods.",
                "correct": true
            },
            {
                "text": "An abstract class can only have abstract methods, while an interface can have both abstract and non-abstract methods."
            },
            {
                "text": "An abstract class and an interface are the same thing in Java."
            },
            {
                "text": "An abstract class and an interface can be used interchangeably in Java."
            }
        ]
    },
    {
        "question": "What is the difference between a static variable and an instance variable in Java?",
        "answers": [
            {
                "text": "A static variable belongs to the class and is shared by all instances of the class, while an instance variable belongs to an object and is unique to each instance of the class.",
                "correct": true
            },
            {
                "text": "A static variable belongs to an object and is unique to each instance of the class, while an instance variable belongs to the class and is shared by all instances of the class."
            },
            {
                "text": "A static variable and an instance variable are the same thing in Java."
            },
            {
                "text": "A static variable and an instance variable can be used interchangeably in Java."
            }
        ]
    },
    {
        "question": "What is the difference between an ArrayList and a LinkedList in Java?",
        "answers": [
            {
                "text": "An ArrayList is implemented as a resizable array, while a LinkedList is implemented as a doubly linked list.",
                "correct": true
            },
            {
                "text": "An ArrayList is implemented as a singly linked list, while a LinkedList is implemented as a resizable array."
            },
            {
                "text": "An ArrayList and a LinkedList are the same thing in Java."
            },
            {
                "text": "An ArrayList and a LinkedList can be used interchangeably in Java."
            }
        ]
    },
    {
        "question": "What is the difference between checked and unchecked exceptions in Java?",
        "answers": [
            {
                "text": "Checked exceptions are checked at compile-time, while unchecked exceptions are checked at runtime.",
                "correct": true
            },
            {
                "text": "Checked exceptions are checked at runtime, while unchecked exceptions are checked at compile-time."
            },
            {
                "text": "Checked and unchecked exceptions are the same thing in Java."
            },
            {
                "text": "Checked and unchecked exceptions can be used interchangeably in Java."
            }
        ]
    },

    {
        "question": "What is serialization in Java?",
        "answers": [
            {
                "text": "Serialization is the process of converting an object into a stream of bytes for storage or transmission.",
                "correct": true
            },
            {
                "text": "Serialization is the process of converting a stream of bytes into an object for storage or transmission."
            },
            {
                "text": "Serialization is the process of converting an object into a string for storage or transmission."
            },
            {
                "text": "Serialization is the process of converting a string into an object for storage or transmission."
            }
        ]
    },
    {
        "question": "Why is serialization important in Java?",
        "answers": [
            {
                "text": "Serialization is important because it allows objects to be stored or transmitted across different systems or platforms.",
                "correct": true
            },
            {
                "text": "Serialization is important because it allows objects to be compressed for storage or transmission."
            },
            {
                "text": "Serialization is important because it allows objects to be encrypted for storage or transmission."
            },
            {
                "text": "Serialization is not important in Java."
            }
        ]
    },
    {
        "question": "What is the difference between Serializable and Externalizable in Java?",
        "answers": [
            {
                "text": "Serializable is a marker interface that indicates an object can be serialized, while Externalizable is an interface that provides more fine-grained control over the serialization process.",
                "correct": true
            },
            {
                "text": "Serializable is an interface that provides more fine-grained control over the serialization process, while Externalizable is a marker interface that indicates an object can be serialized."
            },
            {
                "text": "Serializable and Externalizable are the same thing in Java."
            },
            {
                "text": "Serializable and Externalizable are not related to serialization in Java."
            }
        ]
    },
    {
        "question": "What is serialVersionUID in Java?",
        "answers": [
            {
                "text": "serialVersionUID is a unique identifier that is used to ensure that the serialized and deserialized objects are compatible.",
                "correct": true
            },
            {
                "text": "serialVersionUID is a version number that is used to indicate the version of the serialized object."
            },
            {
                "text": "serialVersionUID is a security key that is used to encrypt and decrypt the serialized object."
            },
            {
                "text": "serialVersionUID is not used in Java serialization."
            }
        ]
    },
    {
        "question": "What happens if a serialized object is modified in Java?",
        "answers": [
            {
                "text": "If a serialized object is modified, it may not be possible to deserialize the object, or the deserialized object may have unexpected behavior.",
                "correct": true
            },
            {
                "text": "If a serialized object is modified, the deserialized object will always have the same behavior as the original object."
            },
            {
                "text": "If a serialized object is modified, the serialized object will be automatically updated to reflect the changes."
            },
            {
                "text": "If a serialized object is modified, an exception will be thrown during deserialization."
            }
        ]
    },

    {
        "question": "What is an interface in Java?",
        "answers": [
            {
                "text": "An interface is a collection of abstract methods and constants that can be implemented by any class.",
                "correct": true
            },
            {
                "text": "An interface is a concrete class that can be extended by other classes."
            },
            {
                "text": "An interface is a type of exception in Java."
            },
            {
                "text": "An interface is a type of annotation in Java."
            }
        ]
    },
    {
        "question": "What is the difference between an abstract class and an interface in Java?",
        "answers": [
            {
                "text": "An abstract class can have both abstract and non-abstract methods, while an interface can only have abstract methods and constants.",
                "correct": true
            },
            {
                "text": "An abstract class can only have abstract methods, while an interface can have both abstract and non-abstract methods."
            },
            {
                "text": "An abstract class can be instantiated, while an interface cannot."
            },
            {
                "text": "There is no difference between an abstract class and an interface in Java."
            }
        ]
    },
    {
        "question": "Can a class implement multiple interfaces in Java?",
        "answers": [
            {
                "text": "Yes, a class can implement multiple interfaces in Java.",
                "correct": true
            },
            {
                "text": "No, a class can only implement one interface in Java."
            },
            {
                "text": "It depends on the version of Java being used."
            },
            {
                "text": "It depends on the number of abstract methods in the interfaces being implemented."
            }
        ]
    },
    {
        "question": "Can an interface extend another interface in Java?",
        "answers": [
            {
                "text": "Yes, an interface can extend another interface in Java.",
                "correct": true
            },
            {
                "text": "No, an interface cannot extend another interface in Java."
            },
            {
                "text": "It depends on the version of Java being used."
            },
            {
                "text": "It depends on the number of abstract methods in the interfaces being extended."
            }
        ]
    },
    {
        "question": "What is the purpose of default methods in Java interfaces?",
        "answers": [
            {
                "text": "Default methods provide a way to add new functionality to interfaces without breaking existing code that implements those interfaces.",
                "correct": true
            },
            {
                "text": "Default methods are methods that are automatically called when an object is instantiated."
            },
            {
                "text": "Default methods are methods that are automatically called when an object is destroyed."
            },
            {
                "text": "Default methods are methods that are automatically called when an object is serialized."
            }
        ]
    },

    {
        "question": "What is the default access specifier for a class in Java?",
        "answers": [
            {
                "text": "package-private"
            },
            {
                "text": "public"
            },
            {
                "text": "private"
            },
            {
                "text": "protected"
            }
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which access specifier allows a member to be accessed from any class in any package?",
        "answers": [
            {
                "text": "private"
            },
            {
                "text": "protected"
            },
            {
                "text": "package-private"
            },
            {
                "text": "public",
                "correct": true
            }
        ]
    },
    {
        "question": "Which access specifier allows a member to be accessed only within the same package?",
        "answers": [
            {
                "text": "public"
            },
            {
                "text": "private"
            },
            {
                "text": "protected"
            },
            {
                "text": "package-private",
                "correct": true
            }
        ]
    },
    {
        "question": "Which access specifier allows a member to be accessed within the same class and any subclasses, regardless of package?",
        "answers": [
            {
                "text": "public"
            },
            {
                "text": "private"
            },
            {
                "text": "protected",
                "correct": true
            },
            {
                "text": "package-private"
            }
        ]
    },
    {
        "question": "Can a subclass access a private member of its superclass in Java?",
        "answers": [
            {
                "text": "Yes, a subclass can access a private member of its superclass using a getter method.",
            },
            {
                "text": "No, a subclass cannot access a private member of its superclass in Java."
            },
            {
                "text": "It depends on whether the private member is a field or a method.",
            },
            {
                "text": "It depends on the access specifier of the subclass.",
            }
        ],
        "correctAnswer": 1
    },
    {
        "question": "What is the purpose of a security manager in Java?",
        "answers": [
            {
                "text": "To prevent unauthorized access to system resources."
            },
            {
                "text": "To encrypt sensitive data in memory and on disk."
            },
            {
                "text": "To authenticate users and authorize access to specific resources."
            },
            {
                "text": "To monitor and log all network traffic.",
                "correct": true
            }
        ]
    },
    {
        "question": "Which Java package provides cryptographic services, such as encryption and decryption?",
        "answers": [
            {
                "text": "java.util"
            },
            {
                "text": "java.security",
                "correct": true
            },
            {
                "text": "java.net"
            },
            {
                "text": "java.nio"
            }
        ]
    },
    {
        "question": "What is a digital signature in Java?",
        "answers": [
            {
                "text": "A unique identifier for a digital asset, such as a file or document."
            },
            {
                "text": "A hash of a digital asset that is encrypted with a private key.",
            },
            {
                "text": "A checksum of a digital asset that is encrypted with a public key.",
            },
            {
                "text": "An encrypted hash of a digital asset that is verified using a public key.",
                "correct": true
            }
        ]
    },
    {
        "question": "What is the purpose of Java's Secure Socket Layer (SSL) protocol?",
        "answers": [
            {
                "text": "To provide a secure, encrypted channel for data transmission over the internet.",
                "correct": true
            },
            {
                "text": "To verify the authenticity of digital certificates.",
            },
            {
                "text": "To prevent unauthorized access to system resources.",
            },
            {
                "text": "To encrypt sensitive data in memory and on disk.",
            }
        ]
    },
    {
        "question": "What is a Java KeyStore?",
        "answers": [
            {
                "text": "A repository for cryptographic keys and certificates."
            },
            {
                "text": "A collection of security policies that define access controls for system resources."
            },
            {
                "text": "A framework for securing distributed applications.",
            },
            {
                "text": "A mechanism for securing user credentials during authentication.",
                "correct": true
            }
        ]
    },
    {
        "question": "What is a JVM (Java Virtual Machine)?",
        "answers": [
            {
                "text": "A physical computer that runs Java programs."
            },
            {
                "text": "A software application that translates Java bytecode into machine code.",
            },
            {
                "text": "A software component that provides a runtime environment for Java programs.",
                "correct": true
            },
            {
                "text": "A tool for debugging Java programs."
            }
        ]
    },
    {
        "question": "What is the purpose of the Just-In-Time (JIT) compiler in the JVM?",
        "answers": [
            {
                "text": "To optimize the performance of Java programs by converting them to native machine code.",
                "correct": true
            },
            {
                "text": "To provide a secure execution environment for Java programs.",
            },
            {
                "text": "To enable dynamic class loading and linking at runtime."
            },
            {
                "text": "To manage memory usage and garbage collection in Java programs."
            }
        ]
    },
    {
        "question": "What is the difference between the heap and the stack in the JVM?",
        "answers": [
            {
                "text": "The heap is used for static memory allocation, while the stack is used for dynamic memory allocation."
            },
            {
                "text": "The stack is used for primitive data types, while the heap is used for object data types.",
            },
            {
                "text": "The heap is shared among all threads in the JVM, while each thread has its own stack.",
            },
            {
                "text": "The heap is used for dynamic memory allocation, while the stack is used for method calls and local variables.",
                "correct": true
            }
        ]
    },
    {
        "question": "What is a Java classloader?",
        "answers": [
            {
                "text": "A tool for profiling and analyzing Java programs."
            },
            {
                "text": "A component of the JVM that loads Java class files into memory.",
                "correct": true
            },
            {
                "text": "A mechanism for dynamically linking libraries and modules at runtime."
            },
            {
                "text": "A utility for converting Java bytecode into machine code."
            }
        ]
    },
    {
        "question": "What is the PermGen space in the JVM?",
        "answers": [
            {
                "text": "A region of memory used for storing class metadata and internal JVM data structures.",
                "correct": true
            },
            {
                "text": "A region of memory used for storing object instances and arrays."
            },
            {
                "text": "A region of memory used for storing native code and libraries.",
            },
            {
                "text": "A region of memory used for storing the Java runtime environment and system resources."
            }
        ]
    },

    {
        "question": "What is Java garbage collection?",
        "answers": [
            {
                "text": "A process for reclaiming memory used by Java objects that are no longer needed.",
                "correct": true
            },
            {
                "text": "A mechanism for preventing memory leaks and buffer overflows in Java programs."
            },
            {
                "text": "A tool for profiling and optimizing Java programs."
            },
            {
                "text": "A technique for compressing and decompressing data in Java programs."
            }
        ]
    },
    {
        "question": "What are the two main types of garbage collection algorithms used in the JVM?",
        "answers": [
            {
                "text": "Reference counting and mark-and-sweep."
            },
            {
                "text": "Generational and concurrent.",
            },
            {
                "text": "Copy and mark-and-sweep.",
            },
            {
                "text": "Parallel and incremental.",
                "correct": true
            }
        ]
    },
    {
        "question": "What is the difference between minor and major garbage collection cycles?",
        "answers": [
            {
                "text": "Minor cycles collect short-lived objects, while major cycles collect long-lived objects.",
            },
            {
                "text": "Minor cycles are faster and less disruptive than major cycles.",
                "correct": true
            },
            {
                "text": "Minor cycles are triggered more frequently than major cycles.",
            },
            {
                "text": "Major cycles are only performed when the JVM runs out of memory."
            }
        ]
    },
    {
        "question": "What is a memory leak in a Java program?",
        "answers": [
            {
                "text": "A situation where a Java object is not properly released from memory after it is no longer needed.",
                "correct": true
            },
            {
                "text": "A condition where a Java program consumes more memory than it has available.",
            },
            {
                "text": "A type of error that occurs when a Java program attempts to access invalid memory addresses.",
            },
            {
                "text": "A vulnerability in a Java program that can be exploited to gain unauthorized access."
            }
        ]
    },
    {
        "question": "What is the purpose of the finalize() method in Java?",
        "answers": [
            {
                "text": "To explicitly release memory used by Java objects before they are garbage collected."
            },
            {
                "text": "To mark Java objects as eligible for garbage collection.",
            },
            {
                "text": "To prevent Java objects from being garbage collected.",
            },
            {
                "text": "To perform any necessary cleanup actions before Java objects are garbage collected.",
                "correct": true
            }
        ]
    },

    {
        "question": "What is asynchronous programming in Java?",
        "answers": [
            {
                "text": "A programming paradigm where multiple tasks can be executed concurrently without blocking each other.",
                "correct": true
            },
            {
                "text": "A technique for optimizing Java programs by reducing the number of synchronization blocks.",
            },
            {
                "text": "A method for minimizing the amount of memory used by Java objects.",
            },
            {
                "text": "A design pattern for creating scalable and fault-tolerant Java applications."
            }
        ]
    },
    {
        "question": "What is the difference between synchronous and asynchronous programming?",
        "answers": [
            {
                "text": "Synchronous programming blocks the execution until the current task is completed, while asynchronous programming allows the execution to continue to the next task before the current task is completed.",
                "correct": true
            },
            {
                "text": "Synchronous programming is faster and more efficient than asynchronous programming.",
            },
            {
                "text": "Synchronous programming is more scalable than asynchronous programming.",
            },
            {
                "text": "Synchronous programming is more secure than asynchronous programming."
            }
        ]
    },
    {
        "question": "What is a callback function in Java?",
        "answers": [
            {
                "text": "A function that is passed as an argument to another function and is executed asynchronously.",
                "correct": true
            },
            {
                "text": "A function that is used to implement object-oriented programming in Java.",
            },
            {
                "text": "A function that is used to perform error handling in Java programs.",
            },
            {
                "text": "A function that is used to test Java programs."
            }
        ]
    },
    {
        "question": "What is a CompletableFuture in Java?",
        "answers": [
            {
                "text": "A class that represents a future result of an asynchronous computation in Java.",
                "correct": true
            },
            {
                "text": "A class that is used to create new threads in Java programs.",
            },
            {
                "text": "A class that is used to perform network I/O operations in Java programs.",
            },
            {
                "text": "A class that is used to serialize and deserialize Java objects."
            }
        ]
    },
    {
        "question": "What is the difference between parallel and asynchronous programming in Java?",
        "answers": [
            {
                "text": "Parallel programming executes multiple tasks simultaneously on different threads or CPUs, while asynchronous programming executes tasks concurrently without blocking each other.",
                "correct": true
            },
            {
                "text": "Parallel programming is faster and more efficient than asynchronous programming.",
            },
            {
                "text": "Asynchronous programming is more scalable than parallel programming.",
            },
            {
                "text": "Asynchronous programming is more secure than parallel programming."
            }
        ]
    }
];
