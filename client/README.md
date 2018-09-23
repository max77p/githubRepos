# Web Developer Intern Challenge

Build a web app to search Github repositories, favourite repos, manage favourites.

## Instructions
- **Reproduce the designs** provided in the [screenshots](screenshots/desktop.jpg)
- Must use Github API **v3 or v4** - DONE
- Typing in the search input field should **NOT** perform an API call - DONE
- Hitting enter or clicking the "Search" button should perform an API call to Github -DONE

- Performing a search should render a list of **10 repositories**
	- Each item should
		- render the name with owner *(Ex. shopify/polaris)* and link to the repo's page on Github - DONE
		- render the name of the primary language -DONE
		- render the latest release tag **if present** -DONE
		- render the "Add" button **if the repo is not already favourited** -DONE
		- clicking the "Add" button should add the repo to the favourites list -DONE
- When the search input field is cleared, the list of results should cleared -DONE


- When the number of favourites is **more than one** - DONE
	- render a **list of favourited repositories** -DONE
		- Each item should
			- render the name with owner *(Ex. shopify/polaris)* and link to the repo's page on Github -DONE
			- render the name of the primary language -DONE
			- render the latest release tag if present -DONE
			- render the "Remove" button **if the repo has been favourited** -DONE
			- clicking the "Remove" button should remove the repo from the favourites list - DONE

## Notes
- [Github Developer](https://developer.github.com/)
- [Docs on how to create a personal access token to make request to the Github API](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
