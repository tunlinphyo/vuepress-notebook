BRANCH ?=

dev:
	@npm run docs:dev & \
	pid=$$!; \
	until curl -s http://localhost:1234/ >/dev/null; do sleep 1; done; \
	open -a "Google Chrome" http://localhost:1234/; \
	wait $$pid

deploy:
	npm run docs:build && firebase deploy

check-branch:
	@if [ -z "$(BRANCH)" ]; then \
	  echo "❌ BRANCH is required. Usage: make gitpull BRANCH=<branch-name>"; \
	  exit 1; \
	fi

gitpush: check-branch
	@set -e; \
	branch="$$(git rev-parse --abbrev-ref HEAD)"; \
	if [ "$$branch" != "$(BRANCH)" ]; then \
	  echo "❌ You are on '$$branch'. Switch to '$(BRANCH)' first."; \
	  exit 1; \
	fi; \
	git add .; \
	if git diff --cached --quiet; then \
	  echo "ℹ️ Nothing to commit on $(BRANCH)."; \
	  exit 0; \
	fi; \
	printf "Commit message: "; \
	read -r msg; \
	if [ -z "$$msg" ]; then \
	  echo "❌ Empty commit message. Aborting."; \
	  exit 1; \
	fi; \
	git commit -m "$$msg"; \
	git push origin $(BRANCH); \
	echo "✅ Committed and pushed to $(BRANCH): $$msg"
