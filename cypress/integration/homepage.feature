Feature: Homepage

  I want to access Homepage

  Scenario: I can access Homepage
    When I navigate to "/"
    Then I see the main header says "Welcome to Amazing books online store"

  Scenario: Search for a book with filters
    Given I navigate to "/"
    When I search for "Harry Potter"
    Then I should see in the results
      | title                                     | category |
      | Harry Potter and the Philosopher's Stone  | books    |
      | Harry Potter and the Chamber of Secrets   | books    |
      | Harry Potter and the Prisoner of Azkaban  | books    |
      | Harry Potter and the Goblet of Fire       | books    |
      | Harry Potter and the Order of the Phoenix | books    |
      | Harry Potter and the Half-Blood Prince    | books    |
      | Harry Potter and the Deathly Hallows      | books    |

