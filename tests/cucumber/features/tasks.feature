Feature: As an anonymous user I can see the public taks

@dev
Scenario: The persisted tasks are displayed
  Given there are the following tasks:
    | text                  | username | time     | userId  |
    | Create new UTs        | Person1  | 08:00:00 | 1       |
    | Update meteor version | Person2  | 07:00:00 | 2       |
  When I visit the application
  Then I should see 2 tasks
