package com.teema.raora.popcattino

import kotlinx.browser.document
import kotlinx.browser.localStorage
import kotlinx.browser.window
import org.w3c.dom.HTMLAudioElement
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

val body: HTMLElement? get() = document.body
val imageClose: HTMLImageElement get() = id("image-close")
val imageOpen: HTMLImageElement get() = id("image-open")
val headingScore: HTMLHeadingElement get() = id("score")

fun main() {
    localStorage["popcattino_version"] = VERSION

    initialScoreUI()

    body?.addEventListener("mousedown") {
        onKeyDown()
    }

    body?.addEventListener("mouseup") {
        onKeyUp()
    }

    window.setInterval({
        saveScore()
    }, 2000)
}

private fun onKeyDown() {
    val sound = id<HTMLAudioElement>("pop-sound")
    open()
    sound.currentTime = 0.0
    sound.play()
    increaseScore()
}

private fun onKeyUp() {
    close()
}

private fun open() {
    imageOpen.show()
    imageClose.hide()
}

private fun close() {
    imageClose.show()
    imageOpen.hide()
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
    headingScore.innerText = score.toString()

    if (!didWithAnimation) return

    playScoreBounceAnimation()
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

private fun playScoreBounceAnimation() {
    val rotations = listOf("rot-ll", "rot-l", "rot-c", "rot-r", "rot-rr")
    val randomRotation = rotations[Random.nextInt(rotations.size)]

    headingScore.classList.add("pop-out-enter-active", "pop-out-enter", randomRotation)

    window.setTimeout({
        headingScore.classList.remove("pop-out-enter-active", "pop-out-enter", randomRotation)
    }, 80)
}

@Suppress("NOTHING_TO_INLINE", "UNCHECKED_CAST")
private inline fun <T> id(id: String): T = document.getElementById(id) as T

private inline fun HTMLElement.show() {
    classList.add("show")
    classList.remove("hide")
}

private inline fun HTMLElement.hide() {
    classList.add("hide")
    classList.remove("show")
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
