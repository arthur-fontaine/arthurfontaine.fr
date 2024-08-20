export const listenToTriggerMotoEaster = () => {
  const motoEaster = document.querySelector('.moto-easter') as HTMLElement;

  if (!motoEaster) {
    throw new Error("Moto Easter not found");
  }

  let videoElement: HTMLVideoElement | undefined;

  const motoEasterAudio = document.createElement("audio");
  motoEasterAudio.src = "/media/moto-easter.mp3";
  motoEasterAudio.loop = true;
  motoEaster.appendChild(motoEasterAudio);

  if (!motoEasterAudio) {
    throw new Error("Moto Easter audio not found");
  }

  const getVideoElement = <C extends boolean>(create: C): C extends true ? HTMLVideoElement : HTMLVideoElement | undefined => {
    if (videoElement || !create) {
      return videoElement as C extends true ? HTMLVideoElement : HTMLVideoElement | undefined;
    }

    videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    videoElement.style.objectFit = "fill";
    videoElement.playsInline = true;
    const videoSourceElement = document.createElement("source");
    videoSourceElement.src = "/media/moto-easter.mp4";
    videoSourceElement.type = "video/mp4";
    videoElement.appendChild(videoSourceElement);

    return videoElement;
  };

  let timeoutId: number | undefined;
  let state: "hidden" | "visible" = "hidden";

  const handleMouseMove = (event: MouseEvent) => {
    if (
      event.clientX > motoEaster.offsetLeft &&
      event.clientX < motoEaster.offsetLeft + motoEaster.offsetWidth &&
      event.clientY > motoEaster.offsetTop &&
      event.clientY < motoEaster.offsetTop + motoEaster.offsetHeight
    ) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
      motoEaster.style.opacity = "1";
      if (state === "visible") return;
      state = "visible";
      motoEasterAudio.currentTime = 0;
      motoEasterAudio.play();
      const videoElement = getVideoElement(true);
      if (videoElement?.parentNode === motoEaster) return;
      motoEaster.appendChild(videoElement);
    } else {
      motoEaster.style.opacity = "0";
      if (timeoutId !== undefined) return;
      timeoutId = setTimeout(() => {
        if (state === "hidden") return;
        state = "hidden";
        motoEasterAudio.pause();
        const videoElement = getVideoElement(false);
        if (!videoElement) return;
        if (videoElement.parentNode !== motoEaster) return;
        motoEaster.removeChild(videoElement);
        timeoutId = undefined;
      }, 500) as unknown as number;
    }
  };

  document.addEventListener("mousemove", handleMouseMove);
}
