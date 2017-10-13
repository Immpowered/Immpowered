
FROM ubuntu
RUN echo "deb http://us.archive.ubuntu.com/ubuntu/ precise universe" >> /etc/apt/sources.list
RUN apt-get update
RUN apt install -y python3 python3-pip virtualenv 
RUN apt install -y nodejs npm 
RUN apt install -y git
RUN git clone https://github.com/Immpowered/Immpowered.git
RUN cd Immpowered/client && npm install 
RUN /bin/bash -c "cd Immpowered/server && virtualenv venv -p python3 && source venv/bin/activate && pip install -r requirements.txt"
WORKDIR Immpowered
RUN ln -s `which nodejs` /usr/bin/node
RUN ./power build