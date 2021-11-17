inheritance concept in the database there is a continuous performance penalty for joins and refactoring becomes more difficult.
We can use materialized views to reduce the performance penalty of joins, assuming we do not need the very most recent data.

The size of the table will also be larger, increasing the likelihood we have to account for partitioning and reducing the opportunity to run maintenance operations, such as re-indexing, in parallel. The advantage is it is simpler to query for PCIe Devices as a group, assuming that is a common query. Note we could use materialized views to aggregate PCIe Devices as a group while keeping them in separate tables, because often we do not need the latest data from all properties when looking at a large aggregation.

rarely do we want to model inheritance in the database.

The schema should document and enforce the entity relationships. Otherwise we require anyone who works with this schema to be both a technical expert and a domain expert. While that is the ideal situation, it is not the realistic. We do not have separate Engineering and Product teams only because there is not enough time to carry out both roles; we also have them because it is difficult to amass sufficient expertise in both areas.

The filter parameter on the GET fc-cards endpoint should be "?uuid=1,2,3,5,8". The property of the resource is uuid, so the parameter should match the property name. If you have multiple paramters with the same name, many API libraries will only choose the first or the last, which means you only get one resource back.
