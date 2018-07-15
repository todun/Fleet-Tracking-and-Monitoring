# Fleet-Tracking-and-Monitoring
Drone/Fleet real time location tracking

## Problem Statement

A company has a number of drones flying around the country. You have been tasked to build a system to track the location of every drone in real-time. The system's dashboard will only display the last location of the drones, so the backend doesn't need to worry about the history. You can store the state of the application in-memory for simplicity reasons.

Each drone should be associated with a unique identifier, and should report its geo-location coordinates to the central server in real-time through a cellular modem connection. Cellular modem connections are expensive, therefore you need to make sure the drones report back their location using as little data as possible.

The dashboard should be a simple single-page application displaying the list of active drones, by their unique identifiers, along with their current speed. You should visually highlight the drones that have not been moving for more than 10 seconds.

Please provide a Dockerfile or a Docker Compose file so we can easily run your project. You are encouraged to use the programming languages and frameworks that you are most comfortable with, as we want to focus on your understanding of full-stack systems and approach to software engineering rather than on your mastery of particular technologies. That being said, Resin.io is a Node.js-based company, so we will appreciate if you provide additional comments and documentation if that's not the stack you chose, just to make it easier for us to review your solution.

A software application is much more than its production code. We expect you to deliver documentation, automated testing at different levels, and integration with tools to aid development productivity, such as linters.


## Assumptions

Hardware Assumptions:
Each drone has Raspberry PI 3 with GPS module and 3G mobile dongle/other 3G module for cellular internet connectivity.
Drone simulation test module is created due to practical limitation to access GPS receivers and Microcontrollers for testing.

## Solution Overview

### Architecture

## Tech Stack
### Node.js -- server side scripting
### Socket.io -- real time location updates
### Angular and Google Maps for front end
### Resin.io for managing and deploying, continuous integration to embeded systems
