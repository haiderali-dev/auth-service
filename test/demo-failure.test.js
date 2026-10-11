// Intentional failure for the demo/failing-tests branch ONLY. Never merge into main.
//
// BUILD_PROMPT Phase 5 acceptance: "against demo/failing-tests the freestyle deploy job never
// starts". The freestyle chain is build -> test -> deploy, joined by downstream triggers that fire
// only on success, so this failing unit test must stop the chain before the deploy job.
import test from "node:test";
import assert from "node:assert/strict";

test("demo/failing-tests: this test fails on purpose", () => {
  assert.equal(1 + 1, 3, "intentional failure: the deploy job must never start after this");
});
