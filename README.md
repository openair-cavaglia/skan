For mobile testing setup, please see issue [#11](https://github.com/openair-cavaglia/skan/issues/11)

# Skan 
> Idea: use Eventfrog's full functionality with online registration, purchase, statistics, ... but adapt it to create a simple, working self check-in/ check-out solution with the openair's bracelets  

- Scan pre-existing QR code, then regenerate and send an automatic print order. 
- The bracelet with the QR can then be given to participant, who will be able to self check-in/checkout at the entrance.
 
> Design Principle: App use should be as effortless and quick as possible to not create a bottleneck 
> - no need for any type of confirmation 
> - print as soon as QR is detected in field of view

## Requirements
- ready to test by 1st of June
- should work for android (I have a few old ones we can use)
   - web-app via github pages, authentication via Firebase
- [Camera interface](https://github.com/arnerb/skan/issues/4)
- [Decrypt QR](https://github.com/arnerb/skan/issues/3)
- [Regenerate QR from URL](https://github.com/arnerb/skan/issues/2)
- [Label printer](https://github.com/arnerb/skan/issues/1)
  - evaluating.. (will update issue soon)
  - expect ca. 3 weeks delivery

for tests: use [tickets.pdf](https://github.com/openair-cavaglia/skan/files/6570742/tickets.pdf)
