STAGING_BRANCH := develop
PROD_BRANCH := main
BRANCH ?=

dev:
	@npm run docs:dev & \
	pid=$$!; \
	until curl -s http://localhost:1234/ >/dev/null; do sleep 1; done; \
	open -a "Google Chrome" http://localhost:1234/; \
	wait $$pid

deploy:
	@branch="$$(git rev-parse --abbrev-ref HEAD)"; \
	if [ "$$branch" != "$(PROD_BRANCH)" ]; then \
	  echo "❌ You are on '$$branch'. Switch to '$(PROD_BRANCH)' first."; \
	  exit 1; \
	fi
	npm run docs:build && firebase deploy
	@git checkout $(STAGING_BRANCH); \
	echo "✅ DONE"

check-branch:
	@if [ -z "$(BRANCH)" ]; then \
	  echo "❌ BRANCH is required. Usage: make gitpull BRANCH=<branch-name>"; \
	  exit 1; \
	fi

gitpush:
	@set -e; \
	target_branch="$(BRANCH)"; \
	if [ -z "$$target_branch" ]; then \
	  printf "Branch name: "; \
	  read -r target_branch; \
	fi; \
	if [ -z "$$target_branch" ]; then \
	  echo "❌ Empty branch name. Aborting."; \
	  exit 1; \
	fi; \
	branch="$$(git rev-parse --abbrev-ref HEAD)"; \
	if [ "$$branch" != "$$target_branch" ]; then \
	  echo "❌ You are on '$$branch'. Switch to '$$target_branch' first."; \
	  exit 1; \
	fi; \
	git add .; \
	if git diff --cached --quiet; then \
	  echo "ℹ️ Nothing to commit on $$target_branch."; \
	  exit 0; \
	fi; \
	printf "Commit message: "; \
	read -r msg; \
	if [ -z "$$msg" ]; then \
	  echo "❌ Empty commit message. Aborting."; \
	  exit 1; \
	fi; \
	git commit -m "$$msg"; \
	git push origin "$$target_branch"; \
	echo "✅ Committed and pushed to $$target_branch: $$msg"

gitmerge:
	@set -e; \
	git checkout $(DEV_BRANCH); \
	$(MAKE) gitpull BRANCH=$(DEV_BRANCH); \
	git checkout $(PROD_BRANCH); \
	git pull origin $(PROD_BRANCH); \
	if git diff --quiet $(PROD_BRANCH)..$(DEV_BRANCH); then \
	  git checkout $(DEV_BRANCH); \
	  echo "⭕️ No differences to merge. Now you're in $(DEV_BRANCH) branch"; \
	  exit 0; \
	fi; \
	git merge --no-ff --no-edit $(DEV_BRANCH); \
	git push origin $(PROD_BRANCH); \
	echo "❇️ Merged and pushed to $(PROD_BRANCH). Now ready to deploy👌👌👌."
