---
title: Designing Data Intensive Application - Chapter 1 Reliable, Scalable and Maintainable
date: 2021-05-10
author: Kyuho Yi
---


# Table of Contents

TOC


# Overview
---
## What is a data intensive application ?
## Main components of a data intensive application
## Reliability
## Scalability
## Maintainability
---


# What is a data intensive application?

An application where the followings change increase/quickly.
- amount of data 
- complexity of data
- speed of change in data

Developer's goal for data intensive application should be building a system that can work with above use cases. The system must be reliable, scalable, and maintenable. 

---

# Main components of a data intensive application
- Databases - a place to store the data for source ( MySQL,Postgres )
- Cache - a temporary memory storage for expensive operation to speed up reads ( Memcache, redis)
- Full-text index - a place to quickly search data by keyword and filter. ( Apache Lucene)
- MQ(Message queues) - for message passing between process. ( Apache Kafka)
- Streaming processing - for realtime processing of the data ( Apache Samza, Apache Spark )
- Batch processing - for non realtime processing and crunching large amount of data ( Apache Spark/Hadoop)
- Application code - code to connect above components to work together.


---

# Reliability

What is a reliability and what is it important for designing a data intensive application?

a system is reliable when it is
- Fault tolerant
- Secure
- Passes chaos testing
- Ready for full machine failures (hardwares and softwares) backups
- Bugs fix is automated and caught quickly
- Staging and testing environment to monitor and test before production
- Roll-back functionality in case of failure.

Reliability is the foundation of data intensive application.

---

# Scalability

What is a scalability and what is it important for designing a data intensive application?

- Ability to handle varying traffics. Scaling up (vertical scaling) for powerful machines. Scaling out(horizontal scaling) for more machines.
- Handle and optimize traffic load with peak number of read/write for simulataneous users.
- Capacity planning capacity uplift based on traffic growth
- For online system with customers, response time needs to be short. For offline, throughput should be met.
- End user performance monitoring
- Must meet 90th/95th Service Level Agreement/Objective.

Scalability enables the application to grow

---
# Maintainability

What is a maintainability and what is it important for designing a data intensive application?

- Add new people
- Productivity
- Easy configuration and testing (Operation)
- Easy to ramp up and understand the application (Understand)
- Easy to change the code (Evolve)
 
Maintainability ensures the growth of scalability.






