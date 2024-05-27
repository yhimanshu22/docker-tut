# Step 1: Use Alpine as the base image
FROM alpine:3.6

# Step 2: Install MongoDB
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' > /etc/apk/repositories && \
    echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories && \
    apk update && \
    apk add --no-cache mongodb=3.4.4-r0

# Step 2.5: Configure MongoDB
VOLUME ["/data/db"]
WORKDIR /data
EXPOSE 27017
RUN apk add isl

# Step 3: Set the default command to run MongoDB
CMD ["mongod"]
