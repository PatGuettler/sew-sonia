# Installation

## Install Hugo module
```
hugo mod get
```

# Running Hugo in a Windows evn

## Run locally
```
hugo server
```

# Running in WSL and making it accessable to your home internet:

## In your windows env
```
netsh interface portproxy add v4tov4 listenaddress=yourip listenport=1313 connectaddress=127.0.0.1 connectport=1313
netsh advfirewall firewall add rule name="Hugo Dev Server" dir=in action=allow protocol=TCP localport=1313
```

## In WSL
```
hugo server --bind 0.0.0.0 --baseURL http://<Yourip>:1313
```
