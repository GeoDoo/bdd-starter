Feature: Homepage

  I want to access Homepage

  Scenario: I can access Homepage
    When I navigate to "/"
    Then I see the main header says "Welcome to the club"
