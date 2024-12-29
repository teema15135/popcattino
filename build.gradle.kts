plugins {
    kotlin("multiplatform") version "2.1.0"
}

kotlin {
    js(IR) {
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
        binaries.executable()
    }
}

repositories {
    mavenCentral()
}

tasks {
    val copyDistDir by creating(Copy::class) {
        from("build/dist/js/productionExecutable")
        into("dist/")

        dependsOn("assemble")
    }
}
