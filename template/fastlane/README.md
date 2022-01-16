fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

### make_badge

```sh
[bundle exec] fastlane make_badge
```

Make new versioned icon badges.

### bump_badge

```sh
[bundle exec] fastlane bump_badge
```

Bump and badge iOS and Android.

----


## Android

### android bump_badge_build_staging_apk

```sh
[bundle exec] fastlane android bump_badge_build_staging_apk
```

Bump badge and build staging Android APK.

### android deploy_staging

```sh
[bundle exec] fastlane android deploy_staging
```

Build and deploy staging Android APK.

### android bump_badge_build_production_bundle

```sh
[bundle exec] fastlane android bump_badge_build_production_bundle
```

Bump badge and build production Bundle Android.

### android deploy_production

```sh
[bundle exec] fastlane android deploy_production
```

Bump, build and deploy production Bundle Android.

----


## iOS

### ios certificates

```sh
[bundle exec] fastlane ios certificates
```

Set up certs and profiles for iOS.

### ios deploy_staging

```sh
[bundle exec] fastlane ios deploy_staging
```

Sign, build, deploy staging iOS.

### ios deploy_production

```sh
[bundle exec] fastlane ios deploy_production
```

Sign, build, deploy production iOS.

### ios bump_badge_deploy_staging

```sh
[bundle exec] fastlane ios bump_badge_deploy_staging
```

Bump, badge, sign, build, deploy staging iOS.

### ios bump_badge_deploy_prod

```sh
[bundle exec] fastlane ios bump_badge_deploy_prod
```

Bump, badge, sign, build, deploy production iOS.

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
