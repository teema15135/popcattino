package com.teema.raora.popcattino

import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.browser.window
import org.w3c.dom.HTMLAudioElement
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLHeadingElement
import org.w3c.dom.HTMLImageElement
import org.w3c.dom.events.Event
import org.w3c.dom.get
import org.w3c.dom.set
import kotlin.io.encoding.Base64
import kotlin.io.encoding.ExperimentalEncodingApi
import kotlin.random.Random

const val VERSION = "1"

var score = 0

fun main() {
    localStorage["popcattino_version"] = VERSION

    initialScoreUI()

    val app = document.getElementById("app") as HTMLDivElement
    val image = document.getElementById("image") as HTMLImageElement
    val sound = document.getElementById("pop-sound") as HTMLAudioElement

    document.body?.addEventListener("mousedown") {
        image.src = "pop-open.png"
        sound.currentTime = 0.0
        sound.play()

        increaseScore()
    }

    document.body?.addEventListener("mouseup") {
        image.src = "pop-close.png"
    }

    window.setInterval({
        saveScore()
    }, 2000)
}

private fun increaseScore() {
    score++
    updateScoreUI()
}

private fun initialScoreUI() {
    loadScore()
    updateScoreUI(didWithAnimation = false)
}

private fun updateScoreUI(didWithAnimation: Boolean = true) {
    val scoreHeadingText = document.getElementById("score") as HTMLHeadingElement
    scoreHeadingText.innerText = score.toString()

    if (!didWithAnimation) return

    val rotations = listOf("rot-ll", "rot-l", "rot-c", "rot-r", "rot-rr")
    val randomRotation = rotations[Random.nextInt(rotations.size)]

    scoreHeadingText.classList.add("pop-out-enter-active", "pop-out-enter", randomRotation)

    window.setTimeout({
        scoreHeadingText.classList.remove("pop-out-enter-active", "pop-out-enter", randomRotation)
    }, 80)
}

private fun saveScore() {
    localStorage["popcattino_score"] = "${score}don'tcheathaiyah".encodeBase64()
}

private fun loadScore() {
    val encoded =
        localStorage["popcattino_score"] ?: run {
            score = 0
            return
        }

    val decodedScore =
        encoded
            .decodeBase64()
            .replace(oldValue = "don'tcheathaiyah", newValue = "")
            .toIntOrNull()
            ?: run {
                score = 0
                return
            }

    score = decodedScore
}

private inline fun HTMLElement.addEventListener(
    type: String,
    crossinline listener: (Event) -> Unit,
) {
    addEventListener(type, { listener(it) })
}

@OptIn(ExperimentalEncodingApi::class)
private fun String.encodeBase64(): String = Base64.encode(encodeToByteArray())

@OptIn(ExperimentalEncodingApi::class)
private fun String.decodeBase64(): String = Base64.decode(encodeToByteArray()).decodeToString()
