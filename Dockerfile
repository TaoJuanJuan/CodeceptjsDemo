FROM codeception/codeceptjs:1.4.4

COPY ./resource/Fonts /usr/share/fonts

RUN fc-cache -fv