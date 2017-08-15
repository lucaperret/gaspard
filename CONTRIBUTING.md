## Contributing

First off, thank you for considering contributing to gaspard. It's people
like you that make gaspard such a great tool.

### 1. Where do I go from here?

If you've noticed a bug or have a question [search the issue tracker](https://github.com/lucaperret/gaspard/issues?q=something)
to see if someone else in the community has already created a ticket.
If not, go ahead and [make one](https://github.com/lucaperret/gaspard/issues/new)!

### 2. Fork & create a branch

If this is something you think you can fix, then
[fork gaspard](https://help.github.com/articles/fork-a-repo)
and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b 325-add-dom-utiliy
```

### 3. Get the test suite running

Install the development dependencies:

```sh
yarn install
```

Now you should be able to run the entire suite using:

```sh
yarn test:watch
```

### 4. Did you find a bug?

* **Ensure the bug was not already reported** by [searching all
  issues](https://github.com/lucaperret/gaspard/issues?q=).

* If you're unable to find an open issue addressing the problem, [open a new
  one](https://github.com/lucaperret/gaspard/issues/new).  Be sure to
  include a **title and clear description**, as much relevant information as
  possible, and a **code sample** or an **executable test case** demonstrating
  the expected behavior that is not occurring.

### 5. Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help;
everyone is a beginner at first :smile_cat:

### 6. View your changes in a web application

Gaspard is meant to be used by humans, not cucumbers. So make sure to take
a look at your changes in a browser.

To boot up a test NodeJS app:

```sh
yarn dev
```

You should now be able to open <http://localhost:8080> in your browser.
Open your browser Dev console and edit the **examples/index.js** to see with your feature/bugfix working.

### 7. Make a Pull Request

At this point, you should switch back to your master branch and make sure it's
up to date with gaspard's master branch:

```sh
git remote add upstream git@github.com:lucaperret/gaspard.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 325-add-dom-utiliy
git rebase master
git push --set-upstream origin 325-add-dom-utiliy
```

Finally, go to GitHub and
[make a Pull Request](https://help.github.com/articles/creating-a-pull-request)
:D

Travis CI will run our test suite. We care
about quality, so your PR won't be merged until all tests pass.

### 8. Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code
has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of
[good](http://git-scm.com/book/en/Git-Branching-Rebasing)
[resources](https://help.github.com/articles/interactive-rebase),
but here's the suggested workflow:

```sh
git checkout 325-add-dom-utiliy
git pull --rebase upstream master
git push --force-with-lease 325-add-dom-utiliy
```

### 9. Merging a PR (maintainers only)

A PR can only be merged into master by a maintainer if:

* It is passing CI.
* It has no requested changes.
* It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are
met.

### 10. Shipping a release (maintainers only)

Maintainers need to do the following to push out a release:

* Make sure all pull requests are in and the master is up to date
* git push (semantic-release will do the tag)
