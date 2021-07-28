# sideEffect

What is called a function (or procedure) in many programming language is a construct (piece of code) that can be executed because:

It computes a function in the mathematical sense, i.e. given input values, it returns a result, or

It produces some effect, e.g. prints something to the screen, changes a value on a database, launches missiles, sleeps for 10 seconds, sends an SMS.

So effects can be related to state but also to other aspects like firing a missile or pausing execution for a few seconds.

The term side-effect may sound negative but normally the effect of calling a function is the very purpose of the function itself. I suppose that, since the term function was originally used in Mathematics, computing a value is considered to be the primary effect of a function whereas any other effects are considered side-effects. Some programming languages use the term procedure to avoid confusion with functions in the mathematical sense.