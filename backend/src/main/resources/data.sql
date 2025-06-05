INSERT INTO housing_society (
    uuid,
    userid,
    name,
    address,
    built_year,
    nr_of_apartments,
    last_notes_drop,
    registered_phone_numbers,
    last_updated,
    port_code,
    port_status,
    port_accessibility,
    port_last_update
)
VALUES (
           '1e4b7a4b-df5d-4b74-a95f-93b5b69df1b2',
           'user_2xokaDIhl63Ac24fjnPG4LXsawJ',
           'Green Valley Society',
           '122 Elm Street',
           1995,
           50,
           CURRENT_TIMESTAMP,
           10,
           CURRENT_TIMESTAMP,
           'GV123',
           'working',
           'easy',
           CURRENT_TIMESTAMP
       );

INSERT INTO note (uuid, type, header, note, last_updated, due_date_time, housing_society_uuid)
VALUES
    ('3f5b3a2a-ab2d-47b2-a33b-eba6c2399f11', 'Info', 'Maintenance Update',
     'The maintenance will be conducted next week.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,
     '1e4b7a4b-df5d-4b74-a95f-93b5b69df1b2'),

    ('7e9a6e8d-ccda-42ff-92f0-dbc3c95df23a', 'Alert', 'Power Outage',
     'There will be a power outage tomorrow from 10AM to 12PM.', CURRENT_TIMESTAMP, NULL,
     '1e4b7a4b-df5d-4b74-a95f-93b5b69df1b2');
