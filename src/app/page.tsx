"use client";

import { useCallback, useState } from "react";
import { AmbientBackground } from "@/components/AmbientBackground";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import { Invitation } from "@/components/Invitation";
import { SoundToggle, useChime } from "@/components/SoundToggle";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const { enabled, toggle, play } = useChime();

  const handleOpened = useCallback(() => {
    setOpened(true);
    document.body.classList.remove("locked");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <AmbientBackground />
      <SoundToggle enabled={enabled} onToggle={toggle} />

      {!opened && <EnvelopeIntro onOpened={handleOpened} onClickOpen={play} />}

      <Invitation visible={opened} />
    </>
  );
}
