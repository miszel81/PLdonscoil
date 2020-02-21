import * as Sentry from "@sentry/browser";

function initialize() {
  return Sentry.init({
    dsn: "https://8c37081250524f85892c48886769901f@sentry.io/1476320"
  });
}

export default {
  initialize
};
