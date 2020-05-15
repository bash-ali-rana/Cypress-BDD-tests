Feature: "Showing Results Instead"
  Scenario: Mispelling hello world As hello welrd
    Given I'm at Google
    When I type "hello werld" into the search
    And Press 'Search'
    Then I should see that the results are for "hello world".