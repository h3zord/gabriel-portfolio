import { PlacesWorkedContainer, PlacesWorkedContent } from './styles'

export function PlacesWorked() {
  return (
    <PlacesWorkedContainer>
      <h3>Our Services</h3>

      <PlacesWorkedContent>
        <div>
          <h4>Photography</h4>

          <p>
            We offer high-resolution images for use on social media, websites,
            whatever is the best way to promote your business.
          </p>
        </div>

        <div>
          <h4>Short Form Content</h4>

          <p>
            With our creative and focused approach, we help you tell powerful
            stories in seconds, capturing the attention of your target audience
            and effectively driving engagement.
          </p>
        </div>

        <div>
          <h4>Videos</h4>

          <p>
            Our drone videos provide a bird’s-eye view of landscapes,
            properties, events and more. Ideal for highlighting the grandeur and
            beauty of hotels, resorts, tourist destinations and real estate
            projects.
          </p>
        </div>
      </PlacesWorkedContent>
    </PlacesWorkedContainer>
  )
}
