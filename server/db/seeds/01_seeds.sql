INSERT INTO Users (firstName, lastName, email, location, phoneNumber, date_of_birth)
VALUES
    ('John', 'Doe', 'john.doe@example.com', 'New York', '123-456-7890', '1990-05-15'),
    ('Jane', 'Smith', 'jane.smith@example.com', 'San Francisco', '987-654-3210', '1985-10-22'),
    ('Michael', 'Johnson', 'michael.johnson@example.com', 'Los Angeles', '555-555-5555', '1988-12-01');

INSERT INTO Events (eventName, eventDescription, eventLocation, eventDate, organizerId)
VALUES
    ('Tech Conference', 'A conference for technology enthusiasts.', 'Chicago', '2023-08-10', 1),
    ('Hiking Adventure', 'Explore the beautiful mountains.', 'Denver', '2023-09-05', 2),
    ('Art Exhibition', 'An exhibition showcasing local artists.', 'San Francisco', '2023-07-20', 3);

INSERT INTO EventAttendee (eventId, userId)
VALUES
    (1, 2),
    (1, 3),
    (2, 1),
    (3, 1),
    (3, 2);

INSERT INTO Groups (groupName, groupDescription, organizerId)
VALUES
    ('Tech Enthusiasts', 'A group for tech lovers.', 1),
    ('Hiking Club', 'For people who love outdoor adventures.', 2),
    ('Art Community', 'Connecting local artists.', 3);

INSERT INTO GroupMembers (groupId, userId)
VALUES
    (1, 2),
    (1, 3),
    (2, 1),
    (3, 1),
    (3, 2);

INSERT INTO UserInterests (userId, interest)
VALUES
    (1, 'Technology'),
    (1, 'Hiking'),
    (2, 'Hiking'),
    (2, 'Art'),
    (3, 'Art');


