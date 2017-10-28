# HclApp

This project was generated with **Angular CLI**.

To run the project, `cd` into its folder and run:

```
npm i
npm start
```

Then log to  `http://localhost:4200/`.

# Notes

The application is a MVP that is not complete, but it's functional. 

PLEASE BEAR IN MIND that I am accustomed to deeply document in JSDOC *all*
my software, here you will find lack of docs because of the time I had allotted
for the test.

# Database

NO Database support was included. There is a persistence layer that mocks a
rudimental interaction, in which `localStorage` has been used.

# Structure 

Uder `src/app` you'll find all the implementation.

`classes` contain classes mainly for interfacing with the data tier. So any
data structure and model goes here.

`interfaces` contains come contracts that should define the behaviour of other
classes. In particular, I've tried to shape what a pair of services should
implement.

`services` contains a pair of VERY rudimentary application of those interfaces.
One service `AttemptLoggerInterface` logs user attempts, the other is responsible
for the "business logic" (guessing a number).

`shared` contains **shared components**. I often use a `SharedModule` for any
reusable UI component.

There is also a `BigNumberComponent`. The logic here is that the BigNumberComponent
is **only a UI member** who doesn't know nothing about the services and all the
logic around.
It displays a number according to some conditions and emits an event, period.

`ui` contains the two main components.

`ChooserComponent` uses `BigNumberComponent` implementing the communication with
the persistence layer.

`LoggerComponent` doesn't know anything about ChooserComponent. It uses a built
in Observable of the persistence service to be notified about any change.
